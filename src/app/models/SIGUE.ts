import { Eps } from "./Eps";
import { RequestUser } from "./Request";
import { Speciality } from "./Speciality";

export class Sigue{
    EPSs : Eps[] = [];
    requests : RequestUser[] =[];
    specialities : Speciality[]=[];

    notificationRequest (eps : string){
        return `SIGUE le informa que actualmente hay cupo disponible para la especilidad solciitada, la direccion de la entidad es y la eps es ${eps}`
    }
    
    asingRequest(requests : RequestUser){
    let idEps: Eps [] = [];
      this.EPSs.forEach(eps => {
        let ep : any = eps.specialities.find((sp) =>{
            return sp.id ==requests.speciality
        });
        if(ep)
            idEps.push(eps)
      });

      return idEps;
    }


    haveSpeciliality(_spc : number){
        let spe = this.specialities.filter((sp)=>{
           return _spc == sp.id
        })
        if (spe.length> 0)
            return true
        return false
    }

    
    


}