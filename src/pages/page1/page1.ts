import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComoJugarPage } from '../como-jugar/como-jugar';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
    
  }

  pushLevelsPage(){

   this.navCtrl.push(HomePage);
  }

  pushInstructionsPage(){

  	this.navCtrl.push(ComoJugarPage);
  }

}
