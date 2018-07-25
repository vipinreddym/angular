import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']

})
export class RegestrationComponent implements OnInit {
registerData={
  
};
 public var: any;
  constructor(
private route : Router
  ) { }

  ngOnInit() {
  }
  signUp(){
// console.log(this.registerData)
 this.var = this.registerData;
 console.log(this.var.email)
localStorage.setItem('email',this.var.email)
localStorage.setItem('password',this.var.password)
this.route.navigate(['/login']);

}
}
