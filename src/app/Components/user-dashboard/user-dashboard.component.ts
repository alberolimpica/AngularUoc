import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/activity';
import { ActivitiesService } from 'src/app/Services/activities.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  activities:Activity[] = [];
  selectedActivity?: Activity;

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.getActivities();
  }


  getActivities(): void {
    this.activitiesService.getActivities().subscribe(activities => this.activities = activities);
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

}
