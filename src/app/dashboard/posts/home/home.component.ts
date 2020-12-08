import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Object;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    });
  }

}
