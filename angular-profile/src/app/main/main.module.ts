import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ProfilePageComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ModalModule.forRoot()
  ]
})
export class MainModule { }
