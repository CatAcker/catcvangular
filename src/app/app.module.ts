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
import { WaveGirlComponent } from './wave-girl/wave-girl.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    MePageComponent,
    HobbiesPageComponent,
    SkillsPageComponent,
    SharedComponent,
    WaveGirlComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
