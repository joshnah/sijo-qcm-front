import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishConfirmationComponent } from './finish-confirmation.component';

describe('FinishConfirmationComponent', () => {
  let component: FinishConfirmationComponent;
  let fixture: ComponentFixture<FinishConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
