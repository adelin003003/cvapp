import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'isSkills' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'isSkills' } },
  { path: 'jobs', component: JobHistoryComponent, data: { animation: 'isJobs' } },
  { path: 'personal', component: PersonalInfoComponent, data: { animation: 'isPersonal' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
