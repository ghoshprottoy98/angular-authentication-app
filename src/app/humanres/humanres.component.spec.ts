import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresComponent } from './humanres.component';

describe('HumanresComponent', () => {
  let component: HumanresComponent;
  let fixture: ComponentFixture<HumanresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
