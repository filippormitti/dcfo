export interface User {
    _id:number;
    username: string;
    mail: string;
    roles:string;
    salt:string;
    digest:string;
    win:number;
    lost:number;
    played:number;
}
