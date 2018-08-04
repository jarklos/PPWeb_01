import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosUserComponent } from './cursos-user.component';

describe('CursosUserComponent', () => {
  let component: CursosUserComponent;
  let fixture: ComponentFixture<CursosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
