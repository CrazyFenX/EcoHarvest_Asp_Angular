import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPlateComponent } from './contact-plate.component';

describe('ContactPlateComponent', () => {
  let component: ContactPlateComponent;
  let fixture: ComponentFixture<ContactPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
