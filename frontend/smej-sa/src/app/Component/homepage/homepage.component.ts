import { Component, OnInit } from '@angular/core';
import { Vtipy } from '../../Module/vtipy';
import { isPromise } from '@angular/compiler/src/util';
import { JokeServiceService } from '../../Services/joke-service.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
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
  delete(joke:Vtipy){
    this.jokeService.deleteJoke(joke).subscribe();
  }
}
