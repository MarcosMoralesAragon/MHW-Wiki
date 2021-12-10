import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruosComponent } from './monstruos.component';

describe('MonstruosComponent', () => {
  let component: MonstruosComponent;
  let fixture: ComponentFixture<MonstruosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstruosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstruosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
