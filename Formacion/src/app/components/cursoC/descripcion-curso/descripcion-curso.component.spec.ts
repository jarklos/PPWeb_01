import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionCursoComponent } from './descripcion-curso.component';

describe('DescripcionCursoComponent', () => {
  let component: DescripcionCursoComponent;
  let fixture: ComponentFixture<DescripcionCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
