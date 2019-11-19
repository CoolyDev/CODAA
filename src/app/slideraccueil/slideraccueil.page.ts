import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideraccueil',
  templateUrl: './slideraccueil.page.html',
  styleUrls: ['./slideraccueil.page.scss'],
})
export class SlideraccueilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  start(){
    this.router.navigateByUrl('/home');
  }
}
