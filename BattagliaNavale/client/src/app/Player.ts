import { Ship } from './Ship';
export interface Player {
    _id:string;
    shots: number[];
    shipGrid: number[];
    ships: Ship[];
}
