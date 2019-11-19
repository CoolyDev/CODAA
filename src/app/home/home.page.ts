import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscribe:any;
  constructor(public navCtrl: NavController,private router: Router,public platform:Platform) {
    this.subscribe=this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name=='HomePage'){
        if(window.confirm("Voulez vous vraiment quittez")){
            {
              navigator["app"].exitApp();
            }
        }
      }
    })
  }
  devis(){
    this.router.navigateByUrl('/list');
  }
  contactez(){
this.router.navigateByUrl('whatsapp://send?phone=+212 698-914050')
  }
  evaluez(){
    console.log('yes')
    this.router.navigateByUrl("")
  }
}
