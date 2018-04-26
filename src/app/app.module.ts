import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Fitness', component: TodoComponent},
  {path: 'Welcome Page', component: WelcomepageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
