import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { DataSharingService } from 'src/app/Services/data-sharing.service'

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  userType!: string;
  isUserLoggedIn!: Boolean;

  constructor(public dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }





}
