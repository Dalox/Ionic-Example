import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  hours:number = 0;
  minutes:number = 0;
  seconds:number = 0;
  wait: boolean;

  timer;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.wait = false;

  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Fin',
      subTitle: 'Termino la cuenta regresiva',
      buttons: ['OK']
    });
    alert.present();
  }

  timeStart(){
    this.wait = true;
    this.timer = setInterval(()=>{
      if(this.seconds > 0 && this.seconds <= 60){
        this.seconds--;
      }else{
          this.seconds = 59;
          if(this.minutes > 0 && this.minutes <= 60){
            this.minutes--;
          }else{
            this.minutes = 59;
            if(this.hours > 0){
              this.hours--;
            }else{
              this.hours = 0;
              this.showAlert();
              this.timeStop();
            }
        }
      }
    },1000);
  }

  timePause(){
    clearInterval(this.timer);
    this.wait = false;
  }

  timeStop(){
    clearInterval(this.timer);
    this.wait = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}
