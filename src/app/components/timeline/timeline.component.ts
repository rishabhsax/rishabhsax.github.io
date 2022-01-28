import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/assets/constants';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timelineTitle = this.constants.TIMELINETITLE;
  timeline = this.constants.TIMELINE;
  constructor(private constants: Constants) { }

  ngOnInit() {
  }

}
