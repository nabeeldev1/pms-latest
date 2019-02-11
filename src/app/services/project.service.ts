import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: Http) {
    var obj;
    // this.getJSON().subscribe(data => obj = data, error => console.log(error));
  }

  // public getJSON(): any {
  //   return this.http.get("./projects.json")
  //     .map((res: any) => {console.log(res)})
  //     .catch((error: any) => console.log(error));
  // }
}
