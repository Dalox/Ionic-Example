import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  timer;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  timeStart(){
    this.timer = setInterval(()=>{
      if(this.seconds >= 0 && this.seconds < 60){
        this.seconds++;
      }else{
        this.seconds = 0;
        if(this.minutes >= 0 && this.minutes < 60){
          this.minutes++;
        }else{
          this.minutes = 0;
          if(this.hours >= 0 && this.hours < 24){
            this.hours++;
          }else{
            this.hours = 0;
          }
        }
      }
    },1000);
  }

  timePause(){
    clearInterval(this.timer);
  }

  timeStop(){
    clearInterval(this.timer);
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}
