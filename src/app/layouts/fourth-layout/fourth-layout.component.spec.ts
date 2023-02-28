import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthLayoutComponent } from './fourth-layout.component';

describe('FourthLayoutComponent', () => {
  let component: FourthLayoutComponent;
  let fixture: ComponentFixture<FourthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
