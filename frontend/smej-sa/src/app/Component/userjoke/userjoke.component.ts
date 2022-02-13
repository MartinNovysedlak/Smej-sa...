import { Component, OnInit } from '@angular/core';
import { Vtipy } from '../../Module/vtipy';
import { VTIPY } from '../../Module/mock-vtipy';
import { isPromise } from '@angular/compiler/src/util';
import { JokeServiceService } from '../../Services/joke-service.service'
import {UserService} from "../../Services/user.service";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-userjoke',
  templateUrl: './userjoke.component.html',
  styleUrls: ['./userjoke.component.css']
})
export class UserjokeComponent implements OnInit {

  vtipy=VTIPY;
  vtipY:Vtipy[] | undefined;
  constructor(private jokeService:JokeServiceService,  private UserService: UserService) { }

  ngOnInit(): void {
    this.get();
    console.log(this,this.vtipY);
  }

  Submit():void {
    this.UserService.logout()
  }

  get (): void {
    this.jokeService.getJokes()
      .subscribe(vtipy => this.vtipY = vtipy);
  }

}
