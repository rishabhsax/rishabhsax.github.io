import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/assets/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private constants: Constants) { }

  ngOnInit() {
  }
  contactInfo = this.constants.CONTACTINFO;

}
