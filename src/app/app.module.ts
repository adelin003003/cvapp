import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { NavButtonComponent } from './components/nav-bar/nav-button/nav-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PersonalInfoComponent,
    JobHistoryComponent,
    SkillsComponent,
    HomeComponent,
    NavButtonComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
