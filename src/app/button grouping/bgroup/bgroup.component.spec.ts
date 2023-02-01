import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgroupComponent } from './bgroup.component';

describe('BgroupComponent', () => {
  let component: BgroupComponent;
  let fixture: ComponentFixture<BgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
