import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/PostsService';
import { GetPostsComponent } from './posts/get-posts/get-posts.component';
import { PostComponent } from './posts/post/post.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { LatestPostsComponent } from './posts/latest-posts/latest-posts.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'posts',
    component:PostsComponent,
  },
  {
    path:'createPost',
    component:CreatePostComponent,
  },
  {
    path:'myPosts',
    component:GetPostsComponent,
  },
  {
    path:'viewPost/:id',
    component:ViewPostComponent,
  },
  {
    path:'editPost/:id',
    component:EditPostComponent,
  },
  {
    path:'latestPosts',
    component:LatestPostsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    PostsComponent,
    CreatePostComponent,
    GetPostsComponent,
    PostComponent,
    ViewPostComponent,
    EditPostComponent,
    LatestPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
