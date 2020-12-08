import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [PostService]
})
export class PostsModule { }
