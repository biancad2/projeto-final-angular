import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCursadasDetailsComponent } from './materias-cursadas-details.component';

describe('MateriasCursadasDetailsComponent', () => {
  let component: MateriasCursadasDetailsComponent;
  let fixture: ComponentFixture<MateriasCursadasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasCursadasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasCursadasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
