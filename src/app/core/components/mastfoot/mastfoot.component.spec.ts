/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MastfootComponent } from './mastfoot.component';

describe('MastfootComponent', () => {
  let component: MastfootComponent;
  let fixture: ComponentFixture<MastfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
