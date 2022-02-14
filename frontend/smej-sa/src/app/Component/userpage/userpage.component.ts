import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  loginGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  constructor(private readonly router: Router, private readonly userService:UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginGroup.valid) {
      const email = this.loginGroup.value.username;
      const password = this.loginGroup.value.password;
      this.userService.login(email,password).subscribe(() => this.router.navigateByUrl('/home'));
    }
  }
}
