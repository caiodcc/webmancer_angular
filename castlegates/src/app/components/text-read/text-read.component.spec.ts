import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReadComponent } from './text-read.component';

describe('TextReadComponent', () => {
  let component: TextReadComponent;
  let fixture: ComponentFixture<TextReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextReadComponent]
    });
    fixture = TestBed.createComponent(TextReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
