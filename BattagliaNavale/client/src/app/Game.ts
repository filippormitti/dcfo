import { Player } from './Player';
export interface Game {
    _id:number;
    currentPlayer: number;
    winningPlayer: string;
    players:Player[];
    gameStatus: number
   
}
