export interface User {
    _id:number;
    username: string;
    mail: string;
    roles:string;
    salt:string;
    digest:string;
    won:number;
    lost:number;
    played:number;
}
