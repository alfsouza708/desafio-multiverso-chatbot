import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
