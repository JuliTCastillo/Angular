import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase09Component } from './clase09.component';

describe('Clase09Component', () => {
  let component: Clase09Component;
  let fixture: ComponentFixture<Clase09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Clase09Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Clase09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
