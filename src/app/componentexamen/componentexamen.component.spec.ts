import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentexamenComponent } from './componentexamen.component';

describe('ComponentexamenComponent', () => {
  let component: ComponentexamenComponent;
  let fixture: ComponentFixture<ComponentexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentexamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
