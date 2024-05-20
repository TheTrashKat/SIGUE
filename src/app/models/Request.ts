export class RequestUser  {
    idUser : number ;
    idEpsIn : number ;
    speciality : number  ;
    idEpsOut : number ;

    constructor(_idUser: number, _idEpsIn: number, _specility: number, _idEpsOut: number ){
        this.idUser = _idUser;
        this.idEpsIn = _idEpsIn;
        this.speciality = _specility;
        this.idEpsOut = _idEpsOut;
        
    }
}