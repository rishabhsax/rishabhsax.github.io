import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/assets/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private constants: Constants) { }

  subIntro = this.constants.SUBINTRO;
  intro = this.constants.INTRO;
  resumeLink = this.constants.RESUMELINK;
  getInTouch = this.constants. GETINTOUCH;
  viewResume = this.constants. VIEWRESUME;

  ngOnInit() {
  }

}
