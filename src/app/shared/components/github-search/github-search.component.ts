import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {State} from '../../../core/store/index';
import {Store} from '@ngrx/store';

@Component({
  selector: 'shared-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent implements OnInit {

  constructor(private store: Store<State>) { }

  @Output()
  public onSearch: EventEmitter<any> = new EventEmitter();

  @Output()
  public onInputChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  search(text: string){
    this.onSearch.emit(text);
  }

  inputChange(text: string){
    this.onInputChange.emit(text);
  }
}
