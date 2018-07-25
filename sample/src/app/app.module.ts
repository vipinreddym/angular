import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedataComponent } from './moviedata/moviedata.component';
import { SignupComponent } from './signup/signup.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { ValidationsComponent } from './validations/validations.component';
import { CuurencyComponent } from './cuurency/cuurency.component';
import { RateService } from './rate.service';
import { HttpClientModule } from '@angular/common/http';



const routes=[
  {path:"",component:RegestrationComponent},
  {path:"registration",component:RegestrationComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"data",component:NewComponent},
  {path:"movies",component:MoviesComponent},
  {path:"movies/:id",component:MoviedataComponent},
  {path:"signup",component:SignupComponent},
  {path:"empdetails",component:EmpdetailsComponent},
  {path:"validations", component:ValidationsComponent},
  {path:"currency", component:CuurencyComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    RegestrationComponent,
    LoginComponent,
    ProfileComponent,
    MoviesComponent,
    MoviedataComponent,
    SignupComponent,
    EmpdetailsComponent,
    ValidationsComponent,
    CuurencyComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
