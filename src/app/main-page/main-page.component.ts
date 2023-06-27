import { Component, OnInit, Output } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  posts: Post[] = []

  @Output() post:Post

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (posts:Post[]) => this.posts = posts,
      error: e => console.log(e)
    })
  }

}
