import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattagliaComponent } from './battaglia.component';

describe('BattagliaComponent', () => {
  let component: BattagliaComponent;
  let fixture: ComponentFixture<BattagliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattagliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattagliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
