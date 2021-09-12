import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroeListComponent } from './superheroe-list.component';

describe('SuperheroeListComponent', () => {
  let component: SuperheroeListComponent;
  let fixture: ComponentFixture<SuperheroeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
