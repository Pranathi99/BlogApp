import { Component, Input, OnInit } from '@angular/core';
import { postData } from '../postData.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  post:postData;

}
