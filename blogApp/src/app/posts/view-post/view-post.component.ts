import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/PostsService';
import { postData } from '../postData.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  id="";
  post:any;

  constructor(private route:ActivatedRoute,private postService:PostsService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.getPostById(this.id);
  }

  getPostById(id)
  {
      this.postService.getPostByID(id)
      .subscribe((responseData)=>{
        //console.log(responseData);
        this.post=responseData;
      });
  }

  deletePost(){
      this.postService.deletePost(this.id)
      .subscribe((responseData)=>{
        this.router.navigate(['/myPosts']);
      });
  }

}
