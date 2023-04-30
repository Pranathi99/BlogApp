import { Component, OnInit } from '@angular/core';
import { postData } from '../postData.model';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/PostsService';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  imgSrc: string="";
  userMsg:string="";
  posts:postData[]=[];
  userMsgClass:string="alert alert-danger";

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
  }

  onCreatePost(data,form:NgForm)
  {
    if(this.imgSrc)
      data.imgUrl=this.imgSrc;
    else
      data.imgUrl="assets/images/default_food.png";
    var date=new Date();
    var datetime=date.toLocaleDateString()+" "+date.toLocaleTimeString();
    console.log(datetime);
    data.createdDate=datetime.toString();
    data.updatedDate=datetime.toString();
    this.postService.createPost(data)
    .pipe(catchError(()=>this.userMsg = "Error creating new post!"))
    .subscribe((responseData)=>{
      this.userMsg='Post created successfully!';
      form.reset();
    });
  }

  onFileSelected(event:any)
  {
    const file=event.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.imgSrc=reader.result as string;
    }
  }

  getUserMsgClass()
  {
    if(this.userMsg==="Post created successfully!")
      return 'alert alert-success';
    else if(this.userMsg==="Error creating new post!")
      return 'alert alert-danger';
    else 
      return '';
    
  }

}
