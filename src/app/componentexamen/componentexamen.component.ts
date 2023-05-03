import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-componentexamen',
  templateUrl: './componentexamen.component.html',
  styleUrls: ['./componentexamen.component.css']
})
export class ComponentexamenComponent {
  constructor(private http: HttpClient) {
    this.modifCorreu();
    this.llistaAssig();
    this.afegirDepartament();
  }
  modifCorreu() {
    return this.http.post(`http://localhost:3080/alumnes/modifCorreu`, {}).subscribe();
  }

  llistaAssig() {
    this.http.get<any>("http://localhost:3080/llistaAssigInfo").forEach((data) => {
    console.log(data);
  })
}

  afegirDepartament(){
    this.http.post("http://localhost:3080/nouDepartament", {codi: 15, nom: "Ciencies", ubicacio: "Llagostera", tel: 671334663, dni: 3000}).subscribe((data)=>{
      console.log(data)
    })
  }
}
