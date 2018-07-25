import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profileData={

};
public udetails : any;
public showform : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  details(){  
    

    this.udetails = this.profileData;
    console.log(this.udetails.age);
    this.showform = true;
  }
  
}
