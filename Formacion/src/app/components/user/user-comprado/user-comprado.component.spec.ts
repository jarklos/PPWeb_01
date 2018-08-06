import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompradoComponent } from './user-comprado.component';

describe('UserCompradoComponent', () => {
  let component: UserCompradoComponent;
  let fixture: ComponentFixture<UserCompradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
