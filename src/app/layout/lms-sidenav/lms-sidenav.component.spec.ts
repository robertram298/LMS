import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsSidenavComponent } from './lms-sidenav.component';

describe('LmsSidenavComponent', () => {
  let component: LmsSidenavComponent;
  let fixture: ComponentFixture<LmsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmsSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LmsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
