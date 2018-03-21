import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatIconModule,MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,FlexLayoutModule,
    MatToolbarModule,MatIconModule, MatButtonModule, MatCardModule,
    SharedModule
  ],
  declarations: [HeaderComponent,HomeComponent],
  exports: [HeaderComponent,HomeComponent]
})
export class HomepageModule { }
