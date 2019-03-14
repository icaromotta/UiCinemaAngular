import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-play',
  templateUrl: './hero-play.component.html',
  styleUrls: ['./hero-play.component.scss']
})
export class HeroPlayComponent implements OnInit {

  public playICon = '../../../assets/icons8-play-dentro-de-um-círculo-96.png';
  public show = false;

  constructor() { }

  ngOnInit() {
  }

  public showVideo() {
    this.show = true;
  }

  public closeVideo() {
    this.show = false;
  }

}
