/**
 *  Simple HTTP REST server + MongoDB (Mongoose) + Express
 * 
 *  Post and get simple text messages. Each message has a text content, a list of tags
 *  and an associated timestamp.
 *  All the posted messages are stored in a MongoDB collection.
 * 
 *  The application also provide user authentication through JWT. The provided
 *  APIs are fully stateless.
 * 
 * 
 * 
 *  Endpoints          Attributes          Method        Description
 * 
 *     /                  -                  GET         Returns the version and a list of available endpoints
 *     /messages        ?tags=               GET         Returns all the posted messages, optionally filtered by tags
 *                      ?skip=n
 *                      ?limit=m
 *     /messages          -                  POST        Post a new message
 *     /messages/:id      -                  DELETE      Delete a message by id
 *     /tags              -                  GET         Get a list of tags
 * 
 *     /users             -                  GET         List all users
 *     /users/:mail       -                  GET         Get user info by mail
 *     /users             -                  POST        Add a new user
 *     /login             -                  POST        login an existing user, returning a JWT
 * 
 * 
 * ------------------------------------------------------------------------------------ 
 *  To install the required modules:
 *  $ npm install
 * 
 *  To compile:
 *  $ npm run compile
 * 
 *  To setup:
 *  1) Create a file ".env" to store the JWT secret:
 *     JWT_SECRET=<secret>
 * 
 *    $ echo "JWT_SECRET=secret" > ".env"
 * 
 *  2) Generate HTTPS self-signed certificates
 *    $ cd keys
 *    $ openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 36
 *    $ openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem
 * 
 *  3) In postman go to settings and deselect HTTPS certificate check (self-signed
 *     certificate will not work otherwise)
 * 
 *  To run:
 *  $ node run start
 * 
 *  To manually inspect the database:
 *  > use postmessages
 *  > show collections
 *  > db.messages.find( {} )
 *  
 *  to delete all the messages:
 *  > db.messages.deleteMany( {} )
 * 
 */


const result = require('dotenv').config()     // The dotenv module will load a file named ".env"
                                              // file and load all the key-value pairs into
                                              // process.env (environment variable)
if (result.error) {
  console.log("Unable to load \".env\" file. Please provide one to store the JWT secret key");
  process.exit(-1);
}
if( !process.env.JWT_SECRET ) {
  console.log("\".env\" file loaded but JWT_SECRET=<secret> key-value pair was not found");
  process.exit(-1);
}

import fs = require('fs');
import http = require('http');                // HTTP module
import https = require('https');              // HTTPS module
import colors = require('colors');
colors.enabled = true;


import mongoose = require('mongoose');
import {Message} from './Message';
import * as message from './Message';

import { User } from './User';
import * as user from './User';

import { Game } from './Game';
import * as game from './Game';

// import { Player } from './Player';
// import * as player from './Player';
//
// import { Ship } from './Ship';
// import * as ship from './Ship';

import express = require('express');
import bodyparser = require('body-parser');      // body-parser middleware is used to parse the request body and
                                                 // directly provide a Javascript object if the "Content-type" is
                                                 // application/json

import passport = require('passport');           // authentication middleware for express
import passportHTTP = require('passport-http');  // implements Basic and Digest authentication for HTTP (used for /login endpoint)

import jsonwebtoken = require('jsonwebtoken');  // JWT generation
import jwt = require('express-jwt');            // JWT parsing middleware for express

import cors = require('cors');                  // Enable CORS middleware
import io = require('socket.io');               // Socket.io websocket library

var ios = undefined;

var app = express();

// We create the JWT authentication middleware
// provided by the express-jwt library.  
// 
// How it works (from the official documentation):
// If the token is valid, req.user will be set with the JSON object 
// decoded to be used by later middleware for authorization and access control.
//
var auth = jwt( {secret: process.env.JWT_SECRET} );


app.use( cors() );

// Install the top-level middleware "bodyparser"
app.use( bodyparser.json() );


// Add API routes to express application - API END POINT

app.get("/", (req,res) => {

    res.status(200).json( { api_version: "1.0", endpoints: [ "/messages", "/tags", "/users", "/login" ,"/games"] } ); // json method sends a JSON response (setting the correct Content-Type) to the client

});

app.get("/tags", auth, (req,res,next) => {

    message.getModel().distinct("tags").then( (taglist) => {
      return res.status(200).json( taglist ); 
    }).catch( (reason) => {
      return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
    })

});


//***************************** messages *******************************
app.route("/messages").get( auth, (req,res,next) => {

    var filter = {};
    if( req.query.tags ) {
        filter = { tags: {$all: req.query.tags } };
    }
    console.log("Using filter: " + JSON.stringify(filter) );
    console.log(" Using query: " + JSON.stringify(req.query) );

    req.query.skip = parseInt( req.query.skip || "0" ) || 0;
    req.query.limit = parseInt( req.query.limit || "20" ) || 20;

    message.getModel().find( filter ).sort({timestamp:-1}).skip( req.query.skip ).limit( req.query.limit ).then( (documents) => {
      return res.status(200).json( documents );
    }).catch( (reason) => {
      return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
    })

}).post( auth, (req,res,next) => {

    console.log("Received: " + JSON.stringify(req.body) );

    var recvmessage = req.body;
    recvmessage.timestamp = new Date();
    recvmessage.authormail = req.user.mail;

    if( message.isMessage( recvmessage ) ) {

      message.getModel().create( recvmessage ).then( ( data ) => {
        // Notify all socket.io clients
        ios.emit('broadcast', data );

        return res.status(200).json({ error: false, errormessage: "", id: data._id });
      }).catch((reason) => {
        return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
      } )

    } else {
      return next({ statusCode:404, error: true, errormessage: "Data is not a valid Message" });
    }

});

app.get('/messages/:receiver', auth, (req, res, next) => {
  // req.params.receiver contains the :receiver URL component
  message.getModel().find({ receiver: req.params.receiver }).then((documents) => {
      return res.status(200).json(documents);
  }).catch((reason) => {
      return next({ statusCode: 404, error: true, errormessage: "DB error: " + reason });
  });
});

app.delete( '/messages/:id', auth, (req,res,next) => {

  // Check player role
  if( !user.newUser(req.user).hasPlayerRole() ) {
    return next({ statusCode:404, error: true, errormessage: "Unauthorized: user is not a Player"} );
  }
  
  // req.params.id contains the :id URL component

  message.getModel().deleteOne( {_id: req.params.id } ).then( ()=> {
      return res.status(200).json( {error:false, errormessage:""} );
  }).catch( (reason)=> {
      return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
  })

});


//***************************** users *******************************
app.get('/users', auth, (req,res,next) => {

  user.getModel().find( {}, {digest:0, salt:0} ).sort({ win: -1 }).then( (users) => {
    return res.status(200).json( users );
  }).catch( (reason) => {
    return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
  })

});

app.delete('/users/:id', auth, (req, res, next) => {
  // Check player role
  if (!user.newUser(req.user).hasAdminRole()) {
      return next({ statusCode: 404, error: true, errormessage: "Unauthorized: user is not a Player" });
  }
  // req.params.id contains the :id URL component
  user.getModel().deleteOne({ _id: req.params.id }).then(() => {
      return res.status(200).json({ error: false, errormessage: "" });
  }).catch((reason) => {
      return next({ statusCode: 404, error: true, errormessage: "DB error: " + reason });
  });
});


app.post('/users', (req,res,next) => {

    var u = user.newUser( req.body );
    if( !req.body.password ) {
      return next({ statusCode:404, error: true, errormessage: "Password field missing"} );
    }
    u.setPassword( req.body.password );

    u.save().then( (data) => {
      return res.status(200).json({ error: false, errormessage: "", id: data._id });
    }).catch( (reason) => {
      if( reason.code === 11000 )
        return next({statusCode:404, error:true, errormessage: "User already exists"} );
      return next({ statusCode:404, error: true, errormessage: "DB error: "+reason.errmsg });
    })

});

app.get('/users/:mail', auth, (req,res,next) => {

  // req.params.mail contains the :mail URL component
  user.getModel().findOne( {mail: req.params.mail }, {digest: 0, salt:0 }).then( (user)=> {
    return res.status(200).json( user );
  }).catch( (reason) => {
    return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
  })

});

app.get('/renew', auth, (req,res,next) => {
  var tokendata = req.user;
  delete tokendata.iat;
  delete tokendata.exp;
  console.log("Renewing token for user " + JSON.stringify( tokendata ));
  var token_signed = jsonwebtoken.sign(tokendata, process.env.JWT_SECRET, { expiresIn: '1h' } );
  return res.status(200).json({ error: false, errormessage: "", token: token_signed });
});

//***************************** games *******************************
app.get('/games', auth, (req,res,next) => {
    game.getModel().find({0: req.body.gameStatus}).then( (games)=> {
        return res.status(200).json( games );
    }).catch( (reason) => {
        return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
    })
});

app.get('/games/:id', auth, (req, res, next) => {
    game.getModel().findOne({ _id: req.params.id }).then((game) => {
        return res.status(200).json(game);
    }).catch((reason) => {
        return next({ statusCode: 404, error: true, errormessage: "DB error: " + reason });
    });
});

app.get('/games/status/:status', auth, (req, res, next) => {
    game.getModel().find({ gameStatus: req.params.status }).then((games) => {
        return res.status(200).json(games);
    }).catch((reason) => {
        return next({ statusCode: 404, error: true, errormessage: "DB error: " + reason });
    });
});

app.post('/games', (req,res,next) => {
  var g = game.newGame( req.body.user1Id );
  g.save().then( (data) => {
    ios.emit('broadcast', data );

    return res.status(200).json(data);
  }).catch( (reason) => {
    if( reason.code === 11000 )
      return next({statusCode:404, error:true, errormessage: "game already exists"} );
    return next({ statusCode:404, error: true, errormessage: "DB error: "+reason.errmsg });
  })
});

app.post('/games/join', /*auth,*/ (req,res,next) => {
    console.log('post /games/join - reqBody='+JSON.stringify(req.body));

    game.getModel().findOne({_id: req.body.id}).then( (matchedGame)=> {
        ios.emit('broadcast', matchedGame );
        var playerId = matchedGame.join(req.body.userId);

        return res.status(200).json(playerId);
    }).catch( (reason) => {
        return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
    });
});

// url example: 'http://localhost:8080/games/turn/5c36861ba1357722467f5a59/0123'
app.get('/games/:id/turn/:userId', /*auth,*/ (req, res, next) => {
    console.log('get /games/:id/turn/:userId - reqParams='+JSON.stringify(req.params));

    game.getModel().findOne({ _id: req.params.id }).then((matchedGame) => {
        var turn = matchedGame.isMyTurn(req.params.userId);

        return res.status(200).json(turn);
    }).catch((reason) => {
        return next({ statusCode: 404, error: true, errormessage: "DB error: " + reason });
    });
});

app.post('/games/shot', /*auth,*/ (req,res,next) => {
    console.log('post /games/shot - reqBody='+JSON.stringify(req.body));

    game.getModel().findOne({_id: req.body.id}).then( (matchedGame)=> {
        ios.emit('broadcast', matchedGame );
        var outcome = matchedGame.shoot(req.body.x, req.body.y);

        return res.status(200).json(outcome);
    }).catch( (reason) => {
        return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
    });
});

//***************************** games/battlefields *******************************
// url example: 'http://localhost:8080/games/5c36861ba1357722467f5a59/battlefields/0123'
app.get('/games/:id/battlefields/:userId', /*auth,*/ (req, res, next) => {
    console.log('get /games/:id/battlefields/:userId - reqParams='+JSON.stringify(req.params));

    game.getModel().findOne({ _id: req.params.id }).then((matchedGame) => {
        var grids = matchedGame.getGrids(req.params.userId);

        return res.status(200).json(grids);
    }).catch((reason) => {
        return next({ statusCode: 404, error: true, errormessage: "DB error: " + reason });
    });
});

//***************************** ships *******************************
app.post('/ships', /*auth,*/ (req,res,next) => {
    console.log('post /ships - reqBody='+JSON.stringify(req.body));

    game.getModel().findOne({_id: req.body.gameId }).then( (matchedGame)=> {
        ios.emit('broadcast', matchedGame );
        var result = matchedGame.placeShip(req.body.x, req.body.y, req.body.horizontal, req.body.shipIndex);

        return res.status(200).json(result);
    }).catch( (reason) => {
        return next({ statusCode:404, error: true, errormessage: "DB error: "+reason });
    });
});

//***************************** auth *******************************
// Configure HTTP basic authentication strategy 
// trough passport middleware.
// NOTE: Always use HTTPS with Basic Authentication

passport.use( new passportHTTP.BasicStrategy(
  function(username, password, done) {

    // Delegate function we provide to passport middleware
    // to verify user credentials 

    console.log("New login attempt from ".green + username );
    user.getModel().findOne( {mail: username} , (err, user)=>{
      if( err ) {
        return done({statusCode: 500, error: true, errormessage:err});
      }
      if( !user ) {
        return done({statusCode: 500, error: true, errormessage:"Invalid user"});
      }
      if( user.validatePassword( password ) ) {
        return done(null, user);
      }
      return done({statusCode: 500, error: true, errormessage:"Invalid password"});
    })
  }
));


// Login endpoint uses passport middleware to check
// user credentials before generating a new JWT
app.get("/login", passport.authenticate('basic', { session: false }), (req,res,next) => {

  // If we reach this point, the user is successfully authenticated and
  // has been injected into req.user

  // We now generate a JWT with the useful user data
  // and return it as response

  var tokendata = {
    username: req.user.username,
    roles: req.user.roles,
    mail: req.user.mail,
    id: req.user.id
  };

  console.log("Login granted. Generating token" );
  var token_signed = jsonwebtoken.sign(tokendata, process.env.JWT_SECRET, { expiresIn: '1h' } );

  // Note: You can manually check the JWT content at https://jwt.io

  return res.status(200).json({ error: false, errormessage: "", token: token_signed });

});



// Add error handling middleware
app.use( function(err,req,res,next) {

  console.log("Request error: ".red + JSON.stringify(err) );
  res.status( err.statusCode || 500 ).json( err );

});


// The very last middleware will report an error 404 
// (will be eventually reached if no error occurred and if
//  the requested endpoint is not matched by any route)
//
app.use( (req,res,next) => {
  res.status(404).json({statusCode:404, error:true, errormessage: "Invalid endpoint"} );
})



// Connect to mongodb and launch the HTTP server trough Express
//
mongoose.connect( 'mongodb://localhost:27017/Battaglia' ).then( 
    function onconnected() {

        console.log("Connected to MongoDB");
        
        var u = user.newUser( {
          username: "admin",
          mail: "admin@postmessages.it"
        } );
        u.setAdmin();
        u.setPlayer();
        u.setPassword("admin");
        u.save().then( ()=> {
          console.log("Admin user created");

          message.getModel().count({}).then(
              ( count ) => {
                  if( count == 0 ) {
                      console.log("Adding some test data into the database");
                      var m1 = message
                        .getModel()
                        .create({
                          tags: ["Tag1", "Tag2", "Tag3"],
                          content: "Post 1",
                          timestamp: new Date(),
                          authormail: u.mail,
                          receiver: u.mail
                        });
                      var m2 = message
                        .getModel()
                        .create({
                          tags: ["Tag1", "Tag5"],
                          content: "Post 2",
                          timestamp: new Date(),
                          authormail: u.mail,
                          receiver: u.mail
                        });
                      var m3 = message
                        .getModel()
                        .create({
                          tags: ["Tag6", "Tag10"],
                          content: "Post 3",
                          timestamp: new Date(),
                          authormail: u.mail,
                          receiver: u.mail
                        });

                      Promise.all([m1, m2, m3])
                        .then(function() {
                          console.log("Messages saved");
                        })
                        .catch(function(reason) {
                          console.log("Unable to save: " + reason);
                        });

                  }
              })
        }).catch( (err)=> {
          console.log("Unable to create admin user: " + err );
        });


        // To start a standard HTTP server we directly invoke the "listen"
        // method of express application
        let server = http.createServer(app);
        ios = io(server);
        ios.on('connection', function(client) {
          console.log( "Socket.io client connected".green );
        });
        server.listen( 8080, () => console.log("HTTP Server started on port 8080") );

        // To start an HTTPS server we create an https.Server instance 
        // passing the express application middleware. Then, we start listening
        // on port 8443
        //
        /*
        https.createServer({
          key: fs.readFileSync('keys/key.pem'),
          cert: fs.readFileSync('keys/cert.pem')
        }, app).listen(8443);
        */

    },
    function onrejected() {
        console.log("Unable to connect to MongoDB");
        process.exit(-2);
    }
)
