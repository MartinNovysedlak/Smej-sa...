import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    login: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  get submit(): boolean {
    return this.userForm.valid;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
