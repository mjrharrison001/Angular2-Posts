import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { routing }            from './app.routing';

import { AppComponent }       from './app.component';
import { NavComponent }       from './nav.component';
import { HomeComponent }      from './home.component';
import { NotFoundComponent }  from './not-found.component';
import { UsersComponent }     from './users.component';
import { PostsComponent }     from './posts.component';


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent, NavComponent, HomeComponent,
    NotFoundComponent, UsersComponent, PostsComponent
  ],
  providers: [

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
