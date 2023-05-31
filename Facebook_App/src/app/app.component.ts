import { Component } from '@angular/core';
import { Post } from './post/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResponse } from './model/serviceResponse.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facebook_App';
  post:Post[];
  serviceResponse: ServiceResponse;
  oServiceResponse: Observable<ServiceResponse>;
  url="https://my-json-server.typicode.com/Molodduwa/Facebook/db";
  
  error_appear: boolean
  post_height: number;
  constructor(public http:HttpClient){
    this.makeTypedRequest();
    
  }

  makeTypedRequest() : void
  {
    this.oServiceResponse = this.http.get<ServiceResponse>(this.url);
    this.oServiceResponse.subscribe(d => { this.post = d.data; });
  } 
  sorted_posts(): void{
    this.post = this.post.sort((a, b) =>  (b.like - a.like))
    

  }



  submit_add_post(autore: HTMLInputElement, testo: HTMLTextAreaElement) {
    if (autore.value != '' && testo.value != ''){
      this.post_height = 470
      this.error_appear = false
      this.post.push(new Post(0,autore.value, testo.value,0, []))
      autore.value = ''
      testo.value = ''

    }
    else{
      this.error_appear = true
      this.post_height = 510

    }
    
  }
}
