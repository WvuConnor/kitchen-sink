import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColapseComponent } from './colapse.component';

describe('ColapseComponent', () => {
  let component: ColapseComponent;
  let fixture: ComponentFixture<ColapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
