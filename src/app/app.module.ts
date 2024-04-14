import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaircardComponent } from './shared/components/faircards/faircard.component';
import { FairdetailComponent } from './shared/components/fairdetails/fairdetail.component';
import { FairdashboardComponent } from './shared/components/fairdashboard/fairdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FaircardComponent,
    FairdetailComponent,
    FairdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
