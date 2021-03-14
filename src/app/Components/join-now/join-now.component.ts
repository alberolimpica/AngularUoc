import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { UsernameValidator } from 'src/app/Services/username.validator';

@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css']
})
export class JoinNowComponent implements OnInit {
  users:User[] = [];
  
  public name!: FormControl;
  public surname!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public password2!: FormControl;
  public isAdmin!: FormControl;
  public joinNowForm!: FormGroup;
  public isCorectUserAndPass!: boolean;
  public type = new FormControl();
  
  public showErrorPasswords!: boolean;

  public user: User = new User();

  constructor( private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.clearLocalStorageData();
    this.getUsers();
    this.name = new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(55), UsernameValidator.cannotContainSpace]);
    this.surname = new FormControl("", [Validators.minLength(4), Validators.maxLength(55)]);
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.password = new FormControl("", [Validators.required, Validators.minLength(4)]);
    this.password2 = new FormControl("", [Validators.required, Validators.minLength(4)]);
    this.isAdmin = new FormControl("", [Validators.required, Validators.minLength(4)]);

    this.joinNowForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      password: this.password,
      password2: this.password2,
      isAdmin: this.isAdmin,
      email: this.email
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  clearLocalStorageData(): void {
    this.userService.clearLogarStoragedata();
  }

  public checkLogin(){

    this.user.name = this.name.value;
    this.user.surname = this.surname.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.isAdmin = this.isAdmin.value;
    this.isCorectUserAndPass = false;

    this.users.forEach((value) => {
      console.log(value);
      if(!(this.user.email == value.email)){
        this.isCorectUserAndPass = true;
      }else{
        console.log("This email already exist")
      }
  });

  if(this.isCorectUserAndPass){
    console.log("This email doesn't exist, let's create it!")
        this.add( this.user)
  }
 
  }

  add(user: User): void {
    if (!user) { return; }
    this.userService.addUser(this.user)
      .subscribe(user => {
        console.log('Successfully registered');
        this.users.push(user);
        this.router.navigate(['login']); 
      }, (err) => {
        console.error('Error registering', err);
      });
  }


  checkPasswords(){
    if(this.password != this.password2){
      this.showErrorPasswords == true;
    }
  }
}
