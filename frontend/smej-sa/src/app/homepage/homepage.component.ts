import { Component, OnInit } from '@angular/core';
import { Vtipy } from '../vtipy';
import { VTIPY } from '../mock-vtipy';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  vtipy=VTIPY;
  constructor() { }

  ngOnInit(): void {
  }

}
