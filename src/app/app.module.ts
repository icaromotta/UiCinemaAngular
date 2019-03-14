import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroPlayComponent } from './presentation-filter/hero-play/hero-play.component';
import { FilterPlaceComponent } from './presentation-filter/filter-place/filter-place.component';
import { SeatMatrixComponent } from './presentation-filter/seat-matrix/seat-matrix.component';
import { PresentationFilterComponent } from './presentation-filter/presentation-filter.component';
import { CalendarComponent } from './presentation-filter/calendar/calendar.component';
import { PosterComponent } from './order-summary/poster/poster.component';
import { CheckoutComponent } from './order-summary/checkout/checkout.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroPlayComponent,
    FilterPlaceComponent,
    SeatMatrixComponent,
    PresentationFilterComponent,
    CalendarComponent,
    PosterComponent,
    CheckoutComponent,
    OrderSummaryComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
