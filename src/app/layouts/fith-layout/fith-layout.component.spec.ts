import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FithLayoutComponent } from './fith-layout.component';

describe('FithLayoutComponent', () => {
  let component: FithLayoutComponent;
  let fixture: ComponentFixture<FithLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FithLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FithLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
