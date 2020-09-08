import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestPageComponent } from './test-page/test-page.component';
import { MePageComponent } from './me-page/me-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    MePageComponent,
    HobbiesPageComponent,
    SkillsPageComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
