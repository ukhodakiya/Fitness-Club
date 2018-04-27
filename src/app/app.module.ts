import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import {SharedService} from './services/shared.service';


const appRoutes: Routes = [
  {path: 'welcome', component: HomeComponent},
  {path: 'recommendations', component: TodoComponent},
  {path: 'questions', component: WelcomepageComponent},
  {path: '**', redirectTo: 'welcome'}
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
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
