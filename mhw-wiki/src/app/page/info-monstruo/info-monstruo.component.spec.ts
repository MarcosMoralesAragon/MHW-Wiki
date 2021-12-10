import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMonstruoComponent } from './info-monstruo.component';

describe('InfoMonstruoComponent', () => {
  let component: InfoMonstruoComponent;
  let fixture: ComponentFixture<InfoMonstruoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMonstruoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMonstruoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
