import { Eps } from "./Eps";
import { RequestUser } from "./Request";
import { Speciality } from "./Speciality";

export class Sigue{
    EPSs : Eps[] = [];
    requests : RequestUser[] =[];
    specialities : Speciality[]=[];

    notificationRequest (){}
    asingRequest(){}


    haveSpeciliality(_spc : number){
        let spe = this.specialities.filter((sp)=>{
           return _spc == sp.id
        })
        if (spe.length> 0)
            return true
        return false
    }

    


}