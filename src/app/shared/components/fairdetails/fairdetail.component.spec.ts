import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairdetailComponent } from './fairdetail.component';

describe('FairdetailComponent', () => {
  let component: FairdetailComponent;
  let fixture: ComponentFixture<FairdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
