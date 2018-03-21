import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule,MatSidenavModule, MatIconModule,MatListModule,MatExpansionModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { FullscreenDirective } from './shared/fullscreen.directive';

@NgModule({
  declarations: [
    AppComponent,
    FullscreenDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,MatSidenavModule,MatIconModule,MatListModule,MatExpansionModule,
    HomepageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
