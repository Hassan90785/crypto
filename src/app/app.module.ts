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
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllListingComponent } from './all-listing/all-listing.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ActiveListingComponent } from './active-listing/active-listing.component';
import { ActivePresaleComponent } from './active-presale/active-presale.component';
import { UpcommingPresaleComponent } from './upcomming-presale/upcomming-presale.component';
import { TbaBoxComponent } from './tba-box/tba-box.component';
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
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutUsComponent,
    AllListingComponent,
    ActiveListingComponent,
    ActivePresaleComponent,
    UpcommingPresaleComponent,
    TbaBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMarqueeModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
