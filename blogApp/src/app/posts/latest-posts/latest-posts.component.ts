import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/PostsService';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
posts:any;
isLoaded:boolean=false;
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts()
    .subscribe((responseData)=>{
      const arrayVal=Object.values(responseData);
      this.posts=arrayVal.sort((a,b)=>{
        console.log(a.createdDate+" "+a.updatedDate+" "+b.createdDate+" "+b.updatedDate);
        const val1=Math.max(Date.parse(a.createdDate),Date.parse(b.updatedDate));
        console.log(val1);
        const val2=Math.max(Date.parse(b.createdDate),Date.parse(b.updatedDate));
        console.log(val2);
        return val2-val1;
      }).slice(0,10);
      this.isLoaded=true;
    });
  }

}
