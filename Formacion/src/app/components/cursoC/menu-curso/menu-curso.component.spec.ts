import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCursoComponent } from './menu-curso.component';

describe('MenuCursoComponent', () => {
  let component: MenuCursoComponent;
  let fixture: ComponentFixture<MenuCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
