import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/Services/user-store.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  public user: User = new User();
  public id: string = "";
  public userId!: number;

  constructor(private router: Router, private userStore: UserStoreService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserLogged()
  }

  logout(): void {
    
    this.id = localStorage.getItem("UserId")!;
    this.userId = +this.id;

    this.userService.getUser(this.userId)
      .subscribe((resp) => {
        console.log("The user is: ", resp.name, ", ", resp.id);
        this.user = resp;
      });

    this.userService.logout(this.user)
      .subscribe((resp) => {
        console.log('Successfully logged out');
        localStorage.clear()
        this.router.navigate(['login']);
      });
  }

  getUserLogged(): void{
    
    console.log("The user logged in is: ", localStorage.getItem("User"))

  }


  getUsername() {
    //return JSON.parse(localStorage.getItem('currentUser')).email;
}

}
