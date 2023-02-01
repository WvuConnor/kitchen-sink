import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vav2Component } from './vav2.component';

describe('Vav2Component', () => {
  let component: Vav2Component;
  let fixture: ComponentFixture<Vav2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vav2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
