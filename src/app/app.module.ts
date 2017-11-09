import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {AuthService } from './shared/auth.service';
import { MembersComponent } from './members/members.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { AuthorizeComponent } from './authorize/authorize.component';
import { LoginComponent } from './login/login.component';
import { TrymeComponent } from './tryme/tryme.component';

const appRoutes: Routes = [{path: 'Members', component: MembersComponent},
  {path: 'auth/:email', component: AuthorizeComponent}, {path: 'login', component: LoginComponent},
  {path: 'tryme/:email', component: TrymeComponent}, {path: 'tryme', component: TrymeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    AuthorizeComponent,
    LoginComponent,
    TrymeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'mem'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
