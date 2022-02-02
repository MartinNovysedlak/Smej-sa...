import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  userJokeForm = new FormGroup({
    joke: new FormControl("", Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }
  addJoke(){
    console.log(this.userJokeForm.value)
  }

}
