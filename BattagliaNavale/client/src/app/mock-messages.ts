import {Message} from './Message';


export const mockmessages: Message[] = [
    { content: 'first message', timestamp: new Date(), authormail: 'admin@postmessages.it', tags: ['Tag1'],receiver:'diego.crivellin@gemail.com' },
    { content: 'second message', timestamp: new Date(), authormail: 'admin@postmessages.it', tags: ['Tag1', 'Tag5'],receiver:'diego.crivellin@gemail.com ' },
    { content: 'third message', timestamp: new Date(), authormail: 'a@test.a', tags: ['Tag5', 'Tag6', 'Tag7'],receiver:'diego.crivellin@gemail.com ' }
];
