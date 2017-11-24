import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { StageComponent } from './components/stage/stage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChatsComponent } from './components/chats/chats.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [

  { path: '', redirectTo: 'home ', pathMatch: 'full'  },

  { path: 'login', component: LoginComponent  },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent  },
  {
     path: 'chats',
     component: ChatsComponent,
      // canActivate: [AuthGuard],

    children: [
      {
         path: 'inbox',
         component: InboxComponent,
         canActivate: [AuthGuard]
         },
      {
         path: 'chatroom',
         component: ChatroomComponent,
         canActivate: [AuthGuard]
        },
      {
        path: 'stage',
        component: StageComponent ,
        canActivate: [AuthGuard]
      }
    ]

}
  // { path: '**', component: NotFoundComponent  },
  // {
  //   path: '',
  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
