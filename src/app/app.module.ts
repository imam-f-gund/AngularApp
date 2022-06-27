import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router'; //router modif
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CountryService} from './shared/country.service';  //router CountryService
import {HttpClientModule} from '@angular/common/http';//-----
import {FormsModule} from '@angular/forms';

const appRoutes:Routes=[    /////////router angular
  {path:'',component:ListComponent},
  { path:'createUpdate',component:CreateUpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,//add componen in module from createUpdate
    ListComponent,        //ListComponent
    NavbarComponent     //NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //add-----
    FormsModule, //-- add
    RouterModule.forRoot(appRoutes) //
  ],
  providers: [CountryService], //ad coubtrysevice
  bootstrap: [AppComponent]
})
export class AppModule { }
