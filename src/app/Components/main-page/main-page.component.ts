import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/activity';
import { ActivitiesService } from 'src/app/Services/activities.service';
import { DataSharingService } from 'src/app/Services/data-sharing.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  activities:Activity[] = [];
  selectedActivity?: Activity;
  favouriteActivities!: string;

  constructor(private activitiesService: ActivitiesService, public dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.getActivities();
  }


  getActivities(): void {
    this.activitiesService.getActivities().subscribe(activities => this.activities = activities);
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  isFavourite(activity: Activity): void {
    this.favouriteActivities = localStorage.getItem("FavouriteActivities")!;
      
    if(activity.isFavourite){
      activity.isFavourite = false;
      this.favouriteActivities.replace(`[${activity.id}]`, '')
    }else{
      activity.isFavourite = true
      this.favouriteActivities + `[${activity.id}]`;
    }

    localStorage.setItem("FavouriteActivities", this.favouriteActivities);

    
  }


}
