import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'shared-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit {

  @Input()
  public issue: any = null;

  constructor() { }

  ngOnInit() {
  }

}
