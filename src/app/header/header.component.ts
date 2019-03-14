import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoImg = '../../assets/icons8-full-moon-96.png';
  public hamburguerMenu = '../../assets/icons8-menu.svg';

  @Output() public toogleMenuOn: EventEmitter<boolean> = new EventEmitter();

  public condition = false;

  constructor() { }

  ngOnInit() {
  }

  public callMenu(): void {

    if (this.condition === false) {
      this.condition = true;
      this.toogleMenuOn.emit(this.condition);
    } else {
      this.condition = false;
      this.toogleMenuOn.emit(this.condition);
    }
  }

}
