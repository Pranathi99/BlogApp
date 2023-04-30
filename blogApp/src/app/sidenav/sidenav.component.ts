import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  activeLink: string="";

  constructor() { }

  ngOnInit(): void {
  }

  setActive(link:string)
  {
      this.activeLink=link;
  }

}
