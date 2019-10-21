import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController,private router: Router) {}
  devis(){
    this.router.navigateByUrl('/list');
  }
  contactez(){
this.router.navigateByUrl('whatsapp://send?phone=+212 618-314612')
  }
  evaluez(){
    console.log('yes')
    this.router.navigateByUrl("")
  }
}
