import { Ship } from './Ship';
export interface Player {
    _id:number;
    shots: number[];
    shipGrid: number[];
    ships: Ship[];
}
