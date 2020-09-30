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
import { HockeyStickComponent } from './hockey-stick/hockey-stick.component';
import { SwimmingManComponent } from './swimming-man/swimming-man.component';
import { EmbroideryComponent } from './embroidery/embroidery.component';
import { DanceFeetComponent } from './dance-feet/dance-feet.component';
import { GroupPeopleComponent } from './group-people/group-people.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    MePageComponent,
    HobbiesPageComponent,
    SkillsPageComponent,
    SharedComponent,
    WaveGirlComponent,
    PersonalInfoComponent,
    HockeyStickComponent,
    SwimmingManComponent,
    EmbroideryComponent,
    DanceFeetComponent,
    GroupPeopleComponent
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
