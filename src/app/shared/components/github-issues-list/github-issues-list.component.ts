import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'shared-github-issues-list',
  templateUrl: './github-issues-list.component.html',
  styleUrls: ['./github-issues-list.component.css']
})
export class GithubIssuesListComponent implements OnInit {

  @Input()
  public list: any[] = [];

  @Input()
  public repositoryFull: string = null;

  constructor() { }

  ngOnInit() {
  }

}
