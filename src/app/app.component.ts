import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';
import { Sigue } from './models/SIGUE';
import { User } from './models/User';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { Inject} from '@angular/core';
import { Eps } from './models/Eps';
import { RequestUser } from './models/Request';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, CommonModule, MdbModalModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  contactForm: any;

  constructor(private fb:FormBuilder) {

  }


  

  title = 'SIGUE - Sistema Integrado de Gestion de EPS';
  Sigue : Sigue = new Sigue();
  user : User = new User();
  EPS : Eps = new Eps();


  

  isLoginEnable = true;
  isRequestEnable = false;

  ngOnInit(): void {
    let data = "[\r\n{\r\n\"id\":1,\r\n\"name\":\"Sanitas\",\r\n\"users\":[\r\n{\r\n\"id\":1022402279,\r\n\"name\":\"Miguel\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1015186787,\r\n\"name\":\"James\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":52089678,\r\n\"name\":\"karen\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":53785322,\r\n\"name\":\"rosa\",\r\n\"request\":[]\r\n}\r\n],\r\n\"specialities\":[\r\n{\r\n\"id\":1,\r\n\"name\":\"cardiologia\",\r\n\"capacity\":28\r\n},\r\n{\r\n\"id\":2,\r\n\"name\":\"Oculista\",\r\n\"capacity\":39\r\n},\r\n{\r\n\"id\":3,\r\n\"name\":\"cancerologia\",\r\n\"capacity\":23\r\n}\r\n]\r\n},\r\n{\r\n\"id\":2,\r\n\"name\":\"Famisanar\",\r\n\"users\":[\r\n{\r\n\"id\":987654323,\r\n\"name\":\"Jota\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1022345979,\r\n\"name\":\"allyson\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1034876345,\r\n\"name\":\"david\",\r\n\"request\":[]\r\n}\r\n],\r\n\"specialities\":[\r\n{\r\n\"id\":4,\r\n\"name\":\"cirugiaortopedica\",\r\n\"capacity\":15\r\n},\r\n{\r\n\"id\":5,\r\n\"name\":\"medicinageneral\",\r\n\"capacity\":9\r\n},\r\n{\r\n\"id\":6,\r\n\"name\":\"pediatria\",\r\n\"capacity\":25\r\n}\r\n],\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":3,\r\n\"name\":\"Sura\",\r\n\"users\":[\r\n{\r\n\"id\":104475324,\r\n\"name\":\"Maria\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1067321645,\r\n\"name\":\"Jose\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1067934076,\r\n\"name\":\"Jesus\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1029234481,\r\n\"name\":\"Kevin\",\r\n\"request\":[]\r\n}\r\n],\r\n\"specialities\":[\r\n{\r\n\"id\":7,\r\n\"name\":\"optometria\",\r\n\"capacity\":13\r\n},\r\n{\r\n\"id\":8,\r\n\"name\":\"Psiquittria\",\r\n\"capacity\":8\r\n},\r\n{\r\n\"id\":9,\r\n\"name\":\"CirugíaGeneral.\",\r\n\"capacity\":1\r\n}\r\n],\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":4,\r\n\"name\":\"Nuevaeps\",\r\n\"users\":[\r\n{\r\n\"id\":1091416385,\r\n\"name\":\"Manuel\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1053213091,\r\n\"name\":\"Felipe\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":59723743,\r\n\"name\":\"Nelsy\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":76145709,\r\n\"name\":\"Sofia\",\r\n\"request\":[]\r\n}\r\n],\r\n\"specialities\":[\r\n{\r\n\"id\":10,\r\n\"name\":\"CirugíaPlásticayReconstructiva\",\r\n\"capacity\":13\r\n},\r\n{\r\n\"id\":11,\r\n\"name\":\"Dermatología.\",\r\n\"capacity\":7\r\n},\r\n{\r\n\"id\":12,\"name\":\"CirugíaVascular\",\r\n\"capacity\":3\r\n}\r\n],\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":5,\r\n\"name\":\"CapitalSalud\",\r\n\"users\":[\r\n{\r\n\"id\":101132587,\r\n\"name\":\"Sebastian\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":9812744,\r\n\"name\":\"Daniel\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":1044298443,\r\n\"name\":\"Luis\",\r\n\"request\":[]\r\n},\r\n{\r\n\"id\":34675430,\r\n\"name\":\"Karol\",\r\n\"request\":[]\r\n}\r\n],\r\n\"specialities\":[\r\n{\r\n\"id\":13,\r\n\"name\":\"Nefrología\",\r\n\"capacity\":5\r\n},\r\n{\r\n\"id\":14,\r\n\"name\":\"Nutricionista\",\r\n\"capacity\":10\r\n},\r\n{\r\n\"id\":15,\r\n\"name\":\"Rayosx\",\r\n\"capacity\":20\r\n}\r\n],\r\n\"request\":[]\r\n}\r\n]\r\n";
    this.Sigue.EPSs = JSON.parse(data);
    this.createListOfSpecialites();

    this.contactForm = this.fb.group({
      request: [null]
    });

    
  }

  submit() {
    this.generateRequest(this.contactForm.value)
  }

   login(_user: string, _pass: number){
     this.Sigue.EPSs.forEach(eps => {
       let user = eps.users.filter((user) =>{
          return user.name == _user &&  user.id == _pass
        });
        if (user.length >0){
          this.user = user[0];
          this.EPS = eps;
        }
    });

    if(this.user){
      this.isLoginEnable= !this.isLoginEnable
      this.isRequestEnable = !this.isRequestEnable
    }
  }

  generateRequest(_spcId : any){

    let req = new RequestUser(this.user.id, this.EPS.id,_spcId.request,0);
    this.EPS.valideRequestUsers = new Eps().valideRequestUsers;
    this.EPS.notifyUser = new Eps().notifyUser;
    
    if(!this.EPS.valideRequestUsers(req)){
      this.EPS.notifyUser();
    }else {
      this.sendToSigue(req)
    }
      

  }

  
  
  selectChangeHandler(event: any) {
    console.log(event.value);
  }


  sendToSigue(requestUser: RequestUser){
    this.Sigue.requests.push(requestUser);
    console.log(this.Sigue)
  }

  createListOfSpecialites(){
    this.Sigue.EPSs.forEach(eps => {
      eps.specialities.forEach(esp => {
      if(!this.Sigue.haveSpeciliality(esp.id))
        this.Sigue.specialities.push(esp);
      });
    });
  }

  updateEpsOnSigue(){

  }




  
}
