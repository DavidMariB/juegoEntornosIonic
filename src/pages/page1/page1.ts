import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'NO PODES',
      subTitle: 'Los niveles no están implementados todavía.',
      buttons: ['OK']
    });
    alert.present();
  }

}
