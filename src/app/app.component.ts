import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cinema-ui';
  public condition = false;

  public toogleMenuOn(condition: boolean): void {
    this.condition = condition;
  }

}


