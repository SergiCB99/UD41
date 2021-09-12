import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroeDetailsComponent } from './superheroe-details.component';

describe('SuperheroeDetailsComponent', () => {
  let component: SuperheroeDetailsComponent;
  let fixture: ComponentFixture<SuperheroeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
