import { Component, Input } from '@angular/core';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-post-bock',
  templateUrl: './post-bock.component.html',
  styleUrls: ['./post-bock.component.scss']
})
export class PostBockComponent {

  @Input() post: Post


}
