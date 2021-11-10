import { Component, OnInit } from '@angular/core';
import { Vtipy } from '../vtipy';
import { VTIPY } from '../mock-vtipy';
import { isPromise } from '@angular/compiler/src/util';
import { JokeServiceService } from '../joke-service.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  vtipy=VTIPY;
  vtipY:Vtipy[] | undefined;
  constructor(private jokeService:JokeServiceService) { }

  ngOnInit(): void {
    this.get();
    console.log(this,this.vtipY);
  }
  get (): void {
    this.jokeService.getJokes()
    .subscribe(vtipy => this.vtipY = vtipy);
  }
}
