import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominikComponentComponent } from './dominik-component.component';

describe('DominikComponentComponent', () => {
  let component: DominikComponentComponent;
  let fixture: ComponentFixture<DominikComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominikComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominikComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
