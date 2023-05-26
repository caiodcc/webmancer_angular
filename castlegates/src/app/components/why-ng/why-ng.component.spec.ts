import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNgComponent } from './why-ng.component';

describe('WhyNgComponent', () => {
  let component: WhyNgComponent;
  let fixture: ComponentFixture<WhyNgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyNgComponent]
    });
    fixture = TestBed.createComponent(WhyNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
