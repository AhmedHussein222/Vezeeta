import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedComponent } from './ahmed.component';

describe('AhmedComponent', () => {
  let component: AhmedComponent;
  let fixture: ComponentFixture<AhmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhmedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
