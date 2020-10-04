import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { MePageComponent } from './me-page/me-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ReferencesComponent } from './references/references.component';


const routes: Routes = [
  {path: '',component: TestPageComponent, children:[
    {path: 'me', component: MePageComponent},
    {path: 'hobbies', component: HobbiesPageComponent},
    {path: 'skills', component: SkillsPageComponent},
    {path: 'personalInfo', component: PersonalInfoComponent},
    {path: 'references', component: ReferencesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
