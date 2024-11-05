import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsHeaderComponent } from './lms-header.component';

describe('LmsHeaderComponent', () => {
  let component: LmsHeaderComponent;
  let fixture: ComponentFixture<LmsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LmsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
