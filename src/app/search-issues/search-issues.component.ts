import { Component, OnInit } from '@angular/core';

import 'rxjs/observable/forkJoin';

import {Store} from '@ngrx/store';
import {State, getIssuesList, getRepositoriesList, getSearchIssuesState} from '../core/store';

import {Observable} from 'rxjs';
import * as githubSearch from '../core/store/actions/github-search.actions';
import {SearchIssuesState} from '../core/store/reducers/search-issues';

@Component({
  selector: 'app-search-issues',
  templateUrl: './search-issues.component.html',
  styleUrls: ['./search-issues.component.scss']
})
export class SearchIssuesComponent implements OnInit {

  public issues$: Observable<any[]> = this.store.select(getIssuesList);
  public repositories$: Observable<any[]> = this.store.select(getRepositoriesList);
  public searchIssues$: Observable<SearchIssuesState> = this.store.select(getSearchIssuesState);


  constructor(private store: Store<State>) {

  }


  ngOnInit() {
  }

  pageChanged(page: number){
    this.store.dispatch(new githubSearch.PaginatieIssuesAction({page}));
  }

  public onSearch(text: string){
    this.store.dispatch(new githubSearch.SearchIssuesAction({text}));
  }

  public onInputChange(text: string){
    this.store.dispatch(new githubSearch.SearchRepo(text));
  }

}
