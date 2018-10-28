import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'chat',      component: ChatComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',   redirectTo: '/home', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
