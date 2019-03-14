import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-filter',
  templateUrl: './presentation-filter.component.html',
  styleUrls: ['./presentation-filter.component.scss']
})
export class PresentationFilterComponent implements OnInit {

  public playICon = '../../assets/icons8-play-dentro-de-um-círculo-96.png';
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
