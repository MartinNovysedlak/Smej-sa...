import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

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

  constructor(private readonly userService:UserService) { }

  ngOnInit(): void {
  }

  register(){
    if (this.userForm.valid) {
      const username = this.userForm.value.login;
      const password = this.userForm.value.password;
      const firstName = this.userForm.value.firstName;
      const lastName = this.userForm.value.lastName;
      this.userService.register(username,password, firstName,lastName).subscribe();
    }
  }

}
