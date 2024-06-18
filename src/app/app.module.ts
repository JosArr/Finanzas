import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";

import { ReactiveFormsModule } from '@angular/forms';
import {FooterComponent} from "./public/footer/footer.component";
import {ManagerService} from "./services/ManagerService/manager.service";
import {LoginManagerComponent} from "./components/login-manager/login-manager.component";
import {ManagerMenuComponent} from "./components/manager-menu/manager-menu.component";
import {UserService} from "./services/UserService/user.service";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent,
    LoginManagerComponent,
    ManagerMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ManagerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
