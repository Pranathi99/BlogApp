import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userMsg:string="";
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
 
  submitContact(data,form:NgForm)
  {
    // console.log(data);
    //console.log(form.valid);
    console.log(form);
    this.userMsg="Submitted successfully!";
  }

  getUserMsgClass()
  {
    if(this.userMsg==="Submitted successfully!")
      return 'alert alert-success';
    else 
      return '';
  }
}
