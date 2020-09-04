import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultviewComponent } from './defaultview/defaultview.component';
import { HammerModule } from '@angular/platform-browser';
import { IgxIconModule } from 'igniteui-angular';
import { IgxNavigationDrawerModule } from 'igniteui-angular'
@NgModule({
  declarations: [
    AppComponent,
    DefaultviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HammerModule,
    IgxIconModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
