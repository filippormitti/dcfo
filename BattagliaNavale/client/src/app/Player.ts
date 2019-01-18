import { Ship } from './Ship';
export interface Player {
    id:string;
    userId:string;
    shots: number[];
    shipGrid: number[];
    ships: Ship[];
}
