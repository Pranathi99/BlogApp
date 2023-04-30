import { HttpClient } from "@angular/common/http";
import { postData } from "../posts/postData.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PostsService{
    posts:postData[]=[];
    url:string='http://localhost:3000/posts';

    constructor(private httpClient:HttpClient){}

    createPost(post:postData)
    {
        return this.httpClient.post(this.url,post);
    }

    getPosts()
    {
        return this.httpClient.get(this.url);
    }

    getPostByID(id){
        return this.httpClient.get(this.url+"/"+id);
    }

    editPost(post:postData)
    {
        return this.httpClient.put(this.url+"/"+post.id,post);
    }

    deletePost(id)
    {
        return this.httpClient.delete(this.url+"/"+id);
    }

}