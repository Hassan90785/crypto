import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RisersComponent } from './risers/risers.component';
import { FallersComponent } from './fallers/fallers.component';
import { LatestTokensComponent } from './latest-tokens/latest-tokens.component';
import { LatestAnnouncementsComponent } from './latest-announcements/latest-announcements.component';
import { MessageBarComponent } from './message-bar/message-bar.component';
import {NgMarqueeModule} from 'ng-marquee';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RisersComponent,
    FallersComponent,
    LatestTokensComponent,
    LatestAnnouncementsComponent,
    MessageBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMarqueeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
