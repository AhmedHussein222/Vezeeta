import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsraaComponent } from './esraa.component';

describe('EsraaComponent', () => {
  let component: EsraaComponent;
  let fixture: ComponentFixture<EsraaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsraaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsraaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
