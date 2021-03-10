import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { MessageService } from 'src/app/Services/message.service';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/Services/user-store.service';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  public user: User = new User();
  public userFromDB: User = new User();

  users:User[] = [];
  
  public name!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;
  public isCorectUserAndPass!: boolean;

  constructor( private formBuilder: FormBuilder, private userService: UserService, private messageService: MessageService,
    private router: Router, private userStore: UserStoreService) { }

  ngOnInit(): void {
    this.getUsers();
    this.name = new FormControl("", [Validators.required, Validators.minLength(4)]);
    this.password = new FormControl("", [Validators.required, Validators.minLength(4)]);

    this.loginForm = this.formBuilder.group({
      name: this.name,
      password: this.password
    });
  }

  public checkLogin(){
    this.user.name = this.name.value;
    this.user.password = this.password.value;

    this.isCorectUserAndPass = false;
    
    this.users.forEach((value) => {
      console.log(value);
      if(this.user.name == value.name){
        console.log('This username ' + (value.isAdmin ? "is Admin" : "is not admin"));
        if(value.password == this.user.password){
          this.isCorectUserAndPass = true;
          this.user = value;
          this.login();
        }else{
          this.isCorectUserAndPass = false;
        }
      }
    });

    if(!this.isCorectUserAndPass){
      this.messageService.add(`Username or password incorrect`);
    }

    
  }
  login() {
    this.userService.login(this.name.value, this.password.value)
      .subscribe((resp) => {
        console.log('Successfully logged in', this.user.id);
        localStorage.setItem('UserId', "" + this.user.id);
        if(this.user.isAdmin){
          console.log("Navigatin to admin");
          this.router.navigate(['adminDashboard']);
        }else{
          console.log("Navigatin to user");
          this.router.navigate(['userDashboard']);
        }
      });
  }


  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
