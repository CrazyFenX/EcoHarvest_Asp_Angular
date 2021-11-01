import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardWrapperComponent } from './category-card-wrapper.component';

describe('CategoryCardWrapperComponent', () => {
  let component: CategoryCardWrapperComponent;
  let fixture: ComponentFixture<CategoryCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCardWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
