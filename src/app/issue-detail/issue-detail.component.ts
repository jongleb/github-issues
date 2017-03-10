import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {State, getIssueDetailState} from '../core/store/index';
import {SearchIssueAction} from '../core/store/actions/issue-detail.actions';
import {Observable} from 'rxjs';
import {IssueDetailState} from '../core/store/reducers/issue-detail';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  public issueDetail$: Observable<IssueDetailState> = this.store.select(getIssueDetailState);

  constructor(private store: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.route
     .params
     .subscribe(params => {
       this.store.dispatch(new SearchIssueAction(params));
     })
  }

}
