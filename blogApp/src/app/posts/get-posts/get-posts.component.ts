import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/PostsService';
import { postData } from '../postData.model';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.css']
})
export class GetPostsComponent implements OnInit {

  posts:any=[];
  isNext:boolean=false;

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts()
    .subscribe((responseData)=>{
      this.posts=responseData;
    })
  }
}
