import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  public user: User = new User();

  public name!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.name = new FormControl("", [Validators.required, Validators.minLength(8)]);
    this.password = new FormControl("", [Validators.required, Validators.minLength(4)]);

    this.loginForm = this.formBuilder.group({
      name: this.name,
      password: this.password
    });
  }

  public checkLogin(){
    this.user.name = this.name.value;
    this.user.password = this.password.value;
    console.log('User name --> ' + this.user.name + ' User passwerd --> ' + this.user.password);
  }



}
