import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JokeServiceService } from 'src/app/Services/joke-service.service';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  userJokeForm = new FormGroup({
    vtip: new FormControl("", Validators.required),
  });

  constructor( private readonly jokeService:JokeServiceService, private readonly router: Router) { }

  ngOnInit(): void {
  }
  addJoke(){
    this.jokeService.addJoke(this.userJokeForm.value).subscribe(()=>this.router.navigateByUrl('/home'));
    console.log(this.userJokeForm.value)
  }

}
