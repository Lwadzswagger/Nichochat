import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
// import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import {AngularFireAuthModule } from 'angularfire2';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { ChatService } from './services/chat.service';
import { AllAppValidationService } from './services/all-app-validation.service';
import { AppErrorHandler } from './model/app-error-handler';
import {AngularFontAwesomeModule } from 'angular-font-awesome';
import { InboxComponent } from './components/inbox/inbox.component';
import { StageComponent } from './components/stage/stage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import {InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
// import { ScrollableDirective } from './directive/scrollable.directive';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { ChatsComponent } from './components/chats/chats.component';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { AuthGuard } from './services/auth-guard.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
// import { MaterialModule } from './material.module';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
// import {MaterialModule}

export const	firbaseConfig = {
  	// tslint:disable-next-line:indent
  	apiKey: 'AIzaSyDNFUTx--HVAKN_SCGQcJmTj52pJDT48RE',
    authDomain: 'nichochat.firebaseapp.com',
    databaseURL: 'https://nichochat.firebaseio.com',
    projectId: 'nichochat',
    storageBucket: '',
    messagingSenderId: '197443686858'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    InboxComponent,
    StageComponent,
    NotFoundComponent,
    // InfiniteScrollModule,
    LoginComponent,
    SignupComponent,
    AccessDeniedComponent,
    HomeComponent,
    ChatsComponent,
    NavbarComponent,
    SidenavComponent,
    // AngularFirestore,
    InputFormComponent,
  ],
  imports: [
      // FormsModule,
      BrowserModule,
      AngularFontAwesomeModule,
       HttpModule,
       //  MaterialModule,
       AngularFireModule.initializeApp(firbaseConfig),
       AngularFirestoreModule,
      // MatCardModule,
      // MatButtonModule,
      AppRoutingModule
  ],
  providers: [
    AngularFireDatabaseModule,  AngularFireDatabase,
    ChatService, AuthService, AngularFireAuth, AuthGuard,
  {provide: ErrorHandler, useClass: AppErrorHandler}
],

  bootstrap: [AppComponent]
})
export class AppModule { }
