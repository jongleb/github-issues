import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'core-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.scss']
})
export class PaginationButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public perPageDisplay: boolean = false;

  @Input()
  public total: number;

  @Input()
  public perPage: number;

  @Input()
  public current: number = 1;

  @Input()
  public page: number = 1;

  public get hasMore(){
    return this.current < Math.ceil(this.total/this.perPage);
  }

  @Input()
  public loading: boolean;

  @Output()
  public pageChanged: EventEmitter<number> = new EventEmitter<number>();

  public previous(): void {
    this.pageChanged.emit(this.current - 1);
  }

  public next(): void {
    this.pageChanged.emit(this.current + 1);
  }

  public get nextEnabled(): boolean {
    return !this.loading && this.hasMore;
  }

  public get previousEnabled(): boolean{
    return !this.loading && this.current > 1;
  }

  public get pageCount(): number[]{
    return Array.from(new Array(Math.ceil(this.total/this.perPage)), (x,i) => i+1)
  }

}
