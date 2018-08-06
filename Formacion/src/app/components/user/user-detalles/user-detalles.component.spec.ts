import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetallesComponent } from './user-detalles.component';

describe('UserDetallesComponent', () => {
  let component: UserDetallesComponent;
  let fixture: ComponentFixture<UserDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
