import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLayoutComponent } from './third-layout.component';

describe('ThirdLayoutComponent', () => {
  let component: ThirdLayoutComponent;
  let fixture: ComponentFixture<ThirdLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
