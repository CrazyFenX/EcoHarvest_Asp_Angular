import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardWrapperComponent } from './post-card-wrapper.component';

describe('PostCardWrapperComponent', () => {
  let component: PostCardWrapperComponent;
  let fixture: ComponentFixture<PostCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
