import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillYourGipComponent } from './fill-your-gip.component';

describe('FillYourGipComponent', () => {
  let component: FillYourGipComponent;
  let fixture: ComponentFixture<FillYourGipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillYourGipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillYourGipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
