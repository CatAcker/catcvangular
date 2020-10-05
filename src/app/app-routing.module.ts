import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { MePageComponent } from './me-page/me-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ReferencesComponent } from './references/references.component';
import { EducationComponent } from './education/education.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AchievementsComponent } from './achievements/achievements.component';

const routes: Routes = [
  {path: '',component: TestPageComponent, children:[
    {path: 'me', component: MePageComponent},
    {path: 'hobbies', component: HobbiesPageComponent},
    {path: 'skills', component: SkillsPageComponent},
    {path: 'personalInfo', component: PersonalInfoComponent},
    {path: 'references', component: ReferencesComponent},
    {path: 'education', component: EducationComponent},
    {path: 'contactInfo', component: ContactInfoComponent},
    {path: 'achievements', component: AchievementsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
