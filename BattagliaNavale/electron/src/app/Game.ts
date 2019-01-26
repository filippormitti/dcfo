import { Player } from './Player';
export interface Game {
    _id:string;
    currentPlayer: number;
    winningPlayer: number;
    players:string[];
    gameStatus: number;
   
}
