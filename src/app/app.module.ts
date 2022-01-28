import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
// import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";;
import { HttpClientModule } from '@angular/common/http';
// import {AnimateModule} from "./animation/animate.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { VolunteerExperienceComponent } from './components/volunteer-experience/volunteer-experience.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SocialComponent } from './components/social/social.component';
// import {AnimateModule} from "./components/animation/animate.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    BlogComponent,
    ExperienceComponent,
    CertificationsComponent,
    VolunteerExperienceComponent,
    RecommendationsComponent,
    AccomplishmentsComponent,
    ContactComponent,
    AboutComponent,
    TimelineComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // AnimateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
