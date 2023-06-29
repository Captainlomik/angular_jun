import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { Post } from '../shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  aSub: Subscription

  @Output() post: Post

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.aSub = this.postService.getPosts().subscribe({
      next: (posts: Post[]) => this.posts = posts,
      error: e => console.log(e)
    })
  }

  ngOnDestroy() {
    if (this.aSub) this.aSub.unsubscribe()
  }

}
