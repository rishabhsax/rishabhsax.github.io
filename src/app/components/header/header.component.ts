import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/assets/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private constants: Constants) { }

  ngOnInit() {

  }

  title = this.constants.TITLE;
  about = this.constants.ABOUT;
  skills = this.constants.SKILLS;
  experience = this.constants.EXPERIENCE;
  timeline = this.constants.TIMELINETITLE;
  projects = this.constants.PROJECTS;
  education = this.constants.EDUCATION;
  // certifications = this.constants.CERTIFICATIONS;
  // accomplishments = this.constants.ACCOMPLISHMENTS;
  // recommendations = this.constants.RECOMMENDATIONS;
  // volunteering = this.constants.VOLUNTEERING;
  blog = this.constants.BLOG;
  contact = this.constants.CONTACT;

}
