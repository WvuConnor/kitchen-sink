import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnavlayoutComponent } from './tnavlayout.component';

describe('TnavlayoutComponent', () => {
  let component: TnavlayoutComponent;
  let fixture: ComponentFixture<TnavlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnavlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnavlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
