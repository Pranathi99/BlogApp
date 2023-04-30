import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { PostsService } from 'src/app/services/PostsService';
import { postData } from '../postData.model';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post:any;
  id;
  imgSrc: string="";
  myForm:FormGroup;
  isLoaded:boolean=false;

  constructor(private route:ActivatedRoute,private postService:PostsService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.myForm=new FormGroup({
    title:new FormControl(''),
    category:new FormControl(''),
    content:new FormControl(''),
    by:new FormControl(''),
    updatedDate:new FormControl('')
    });
    this.getPostById(this.id)
    .subscribe((responseData)=>{
      this.post=responseData;
      this.isLoaded=true;
      this.myForm.setValue({
      title:this.post.title,
      category:this.post.category,
      content:this.post.content,
      by:this.post.by,
      updatedDate:this.post.imgUrl
    });
    });
  }

  getPostById(id)
  {
    return this.postService.getPostByID(id);
  }

  onEditPost(data,form:NgForm)
  {
    data.id=this.id;
    // console.log(data);
    // console.log(this.imgSrc);
    if(this.imgSrc)
    data.imgUrl=this.imgSrc;
    else
    data.imgUrl=this.post.imgUrl;
    data.createdDate=this.post.createdDate;
    var date=new Date();
    var datetime=date.toLocaleDateString()+" "+date.toLocaleTimeString();
    data.updatedDate=datetime.toString();
    this.postService.editPost(data)
    .subscribe((responseData)=>{
      this.router.navigate(['viewPost',data.id]);
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



}
