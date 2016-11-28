/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageAboutmeComponent } from './page-aboutme.component';

describe('PageAboutmeComponent', () => {
  let component: PageAboutmeComponent;
  let fixture: ComponentFixture<PageAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
