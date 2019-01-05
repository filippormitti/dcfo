import { Player } from './Player';
export interface Game {
    _id:string;
    currentPlayer: number;
    winningPlayer: string;
    players:Player[];
    gameStatus: number;
   
}
