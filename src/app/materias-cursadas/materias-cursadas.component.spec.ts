import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCursadasComponent } from './materias-cursadas.component';

describe('MateriasCursadasComponent', () => {
  let component: MateriasCursadasComponent;
  let fixture: ComponentFixture<MateriasCursadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasCursadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasCursadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
