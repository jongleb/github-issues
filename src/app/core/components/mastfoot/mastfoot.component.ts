import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mastfoot',
  templateUrl: './mastfoot.component.html',
  styleUrls: ['./mastfoot.component.css']
})
export class MastfootComponent implements OnInit {

  @Input()
  public text: string = 'Some random text here';

  constructor() { }

  ngOnInit() {
  }

}
