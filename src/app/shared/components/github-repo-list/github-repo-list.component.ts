import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'shared-github-repo-list',
  templateUrl: './github-repo-list.component.html',
  styleUrls: ['./github-repo-list.component.scss']
})
export class GithubRepoListComponent implements OnInit {

  @Input()
  public list: any[];

  @Output()
  public onItemSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemSelect(item: any){
    this.onItemSelect.emit(item);
  }

}
