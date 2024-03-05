import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionComponent } from './instruction.component';

describe('InstructionComponent', () => {
  let component: InstructionComponent;
  let fixture: ComponentFixture<InstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionComponent]
    });
    fixture = TestBed.createComponent(InstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
