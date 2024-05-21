import { RequestUser } from "./Request";
import { Speciality } from "./Speciality";
import { User } from "./User";


interface valideRequestUsers {
    valideRequestUsers(_requestUser: RequestUser): boolean;
}

export class Eps implements valideRequestUsers {
    id: number = 0;
    name: string = '';
    users: User[] = [];
    specialities: Speciality[] = [];
    request: RequestUser[] = [];
    maxCapacity = 10


    valideRequestUsers(_requestUser: RequestUser) {
        let flag = false;
        this.specialities.forEach(element => {
            if(element.id == _requestUser.speciality){
                if(element.capacity + 1 < this.maxCapacity)
                    flag = true;
            }
        });
        return flag;
    }

    notifyUser() {
        console.log(`${this.name} le informa que actualmente hay cupo disponible para la especilidad solciitada, la direccion de la entidad es :`)
        return `${this.name} le informa que actualmente hay cupo disponible para la especilidad solciitada, la direccion de la entidad es :`
    }



}