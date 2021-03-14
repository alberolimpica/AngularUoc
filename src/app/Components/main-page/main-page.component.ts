import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/activity';
import { ActivitiesService } from 'src/app/Services/activities.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

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
