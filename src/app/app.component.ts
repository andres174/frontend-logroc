import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-logroc';
  users: any ;
  locations: any;

  is_user: boolean = false;
  is_locations: boolean = false;

  constructor(
    private dataService: DataService
  ) {

  }

  getUsers(){
    this.dataService.getUsers().subscribe({
      next: (value) => {
        console.log(value);
        this.users = value;
        console.log(this.users);
        this.is_user = true;
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

  getLocations(){
    this.dataService.getLocations().subscribe({
      next: (value) => {
        console.log(value);
        this.locations = value;
        console.log(this.locations);
        this.is_locations = true;
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

}
