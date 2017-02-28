import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Request, RequestMethod, Headers} from "@angular/http";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {


  http: Http;
    mailgunUrl: string;
    mailgunApiKey: string;

  constructor(http: Http) {
        this.http = http;
        this.mailgunUrl = "MAILGUN_URL_HERE";
        this.mailgunApiKey = window.btoa("api:key-MAILGUN_API_KEY_HERE");  
    }
  
  sendMail(recipient: string, subject: string, message: string) {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
            method: RequestMethod.Post,
            url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
            body: "from=test@example.com&to=" + recipient + "&subject=" + subject + "&text=" + message,
            headers: requestHeaders
        }))
        .subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }

}