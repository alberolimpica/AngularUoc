import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css']
})
export class JoinNowComponent implements OnInit {
  users:User[] = [];
  
  public name!: FormControl;
  public password!: FormControl;
  public isAdmin!: FormControl;
  public joinNowForm!: FormGroup;
  public isCorectUserAndPass!: boolean;

  public user: User = new User();

  constructor( private formBuilder: FormBuilder, private userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getUsers();
    this.name = new FormControl("", [Validators.required, Validators.minLength(4)]);
    this.password = new FormControl("", [Validators.required, Validators.minLength(4)]);
    this.isAdmin = new FormControl("", [Validators.required, Validators.minLength(4)]);

    this.joinNowForm = this.formBuilder.group({
      name: this.name,
      password: this.password,
      isAdmin: this.isAdmin
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  public checkLogin(){
    this.user.name = this.name.value;
    this.user.password = this.password.value;
    this.user.isAdmin = this.isAdmin.value;
    this.isCorectUserAndPass = false;

    this.users.forEach((value) => {
      console.log(value);
      if(!(this.user.name == value.name)){
        this.isCorectUserAndPass = true;
      }else{
        console.log("This username already exist")
      }
  });

  if(this.isCorectUserAndPass){
    console.log("This username doesn't exist, let's create it!")
        this.add( this.user)
  }
 
  }

  add(user: User): void {
    if (!user) { return; }
    this.userService.addUser(this.user)
      .subscribe(user => {
        this.users.push(user);
      });
  }

}
