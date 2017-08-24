import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DataTo: any;
  DataCc: any;
  DataSubject: any;
  DataBody: any;


  constructor(public navCtrl: NavController, private emailComposer: EmailComposer) {

  }
  send() {
    let email = {
      // to: 'email@gmail.com',
      // cc: 'email@gmail.com',
      to: this.DataTo,
      cc: this.DataCc,
      subject: this.DataSubject,
      body: this.DataBody,
      isHtml: true
    };

    this.emailComposer.open(email);
  }


}
