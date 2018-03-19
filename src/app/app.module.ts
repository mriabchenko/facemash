import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyAppComponent } from './app.component';

import { RatingPageComponent } from '../pages/rating/rating';
import { ProfilePageComponent } from '../pages/profile/profile';
import { ComparePageComponent } from '../pages/compare/compare';
import { TabsPageComponent } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyAppComponent,
    RatingPageComponent,
    ProfilePageComponent,
    ComparePageComponent,
    TabsPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    RatingPageComponent,
    ProfilePageComponent,
    ComparePageComponent,
    TabsPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
