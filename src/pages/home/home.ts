import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  d;
  myDate:String;
  od;
  otherDate:string;
  selectPais;
  paises = [
    {
      pais:"Colombia",
      UTC:0
    },
    {
      pais:"Mexico",
      UTC:3
    },
    {
      pais:"USA",
      UTC:2
    }
  ];

  constructor(public navCtrl: NavController) {
    setInterval(()=>{
      this.d = new Date();
      //this.d.setUTCHours(5,5);
      this.myDate = this.d.toLocaleTimeString();
      this.od = new Date(this.d.getTime() + this.selectPais*3600000);
      this.otherDate = this.od.toLocaleTimeString();
    },1000);
  }

}
