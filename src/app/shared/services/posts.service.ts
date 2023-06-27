import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Post } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  protected url = `${environment.url}/posts`

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/`)
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`)
  }

  createPost(data: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}`, data)
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.url}/${id}`)
  }

}
