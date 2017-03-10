import { Http, URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';
import {Observable} from "rxjs";

export interface GithubApiServiceOptions {
  text: string;
  per_page?: number;
  page?: number;
}

@Injectable()
export class GithubApiService {
  private url: string = 'https://api.github.com/';

  constructor(private http: Http) {

  }


  searchIssuesByUserAndRepo(options: GithubApiServiceOptions): Observable<any>{
    const url: string = `${this.url}search/issues`;
    let params = new URLSearchParams();

    params.set('q',  `repo:${options.text}+type:issues`);

    if(options.page){
      params.set('page',  options.page.toString());
    }

    if(options.per_page){
      params.set('per_page',  options.per_page.toString());
    }

    return this.http
      .get(url, {search: params})
      .map(response => response.json());
  }

  searchReposByUser(user: string): Observable<any> {
    const url: string = `${this.url}search/repositories`;
    let params = new URLSearchParams();

    params.set('q', `user:${user}`);

    return this.http
      .get(url, {search: params})
      .map(response => response.json());
  }

  issueById(options: {owner: string; repo: string; number: string}): Observable<any>{
    const url: string = `${this.url}repos/${options.owner}/${options.repo}/issues/${options.number}`;
    let params = new URLSearchParams();
    return this.http
      .get(url, {search: params})
      .map(response => response.json());
  }
}
