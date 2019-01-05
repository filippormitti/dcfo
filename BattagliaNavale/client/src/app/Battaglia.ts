
export class Battle{
  
}
export class Board{
    constructor(){
        this.matrix = [];

        for(var i: number = 0; i < 10; i++) {
            this.matrix[i] = [];
            for(var j: number = 0; j< 10; j++) {
                this.matrix[i][j] = new BoardItem(i,j);
            }
        }
    }
    matrix: any[];
    guesses: number = 0;
}
export class BoardItem{
    constructor(x: number,y:number) {
        this.x = x;
        this.y = y;
    }
    x: number;
    y: number;
    
}

