import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperheroeComponent } from './add-superheroe.component';

describe('AddSuperheroeComponent', () => {
  let component: AddSuperheroeComponent;
  let fixture: ComponentFixture<AddSuperheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuperheroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
