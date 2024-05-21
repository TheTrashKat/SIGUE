import { RequestUser } from "./Request";
import { Speciality } from "./Speciality";
import { User } from "./User";

export class Eps {
    id : number  = 0;
    name : string = '';
    users : User[] =[];
    specialities : Speciality[] =[];
    request : RequestUser [] =[];


    valideRequestUsers(_requestUser : RequestUser){
        return false
    }

    notifyUser(){
        console.log('MENSAJE PA TU')
    }



}