import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/assets/constants';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  github = this.constants. GITHUBLINK;
  linkedin = this.constants. LINKEDINLINK;
  gmail = this.constants. GMAILLINK;
  youtube = this.constants. YOUTUBELINK;

  constructor(private constants: Constants) { }

  ngOnInit() {
  }

}
