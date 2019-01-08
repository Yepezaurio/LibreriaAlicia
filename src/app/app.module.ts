import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//  IMPORTAMOS LAS DOS FUNCIONES DE ANGULAR CON FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// CREAMOS UNA VARIABLE FIREBASECONFIG PARA LOGAR NUESTRA CONEXION.
export const firebaseConfig = {
  apiKey: "AIzaSyDqUClw2B468I_fpztzX07DibkQBbaxRRk",
    authDomain: "libreria-6de52.firebaseapp.com",
    databaseURL: "https://libreria-6de52.firebaseio.com",
    projectId: "libreria-6de52",
    storageBucket: "libreria-6de52.appspot.com",
    messagingSenderId: "264058956639"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Importamos estas 2 variables que son las que importamos arriba con el nombre de la BD
    AngularFireModule.initializeApp(firebaseConfig,'Libreria'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
