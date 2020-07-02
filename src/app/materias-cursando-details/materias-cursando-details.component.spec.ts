import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCursandoDetailsComponent } from './materias-cursando-details.component';

describe('MateriasCursandoDetailsComponent', () => {
  let component: MateriasCursandoDetailsComponent;
  let fixture: ComponentFixture<MateriasCursandoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasCursandoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasCursandoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
