import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSoldMenuComponent } from './user-sold-menu.component';

describe('UserSoldMenuComponent', () => {
  let component: UserSoldMenuComponent;
  let fixture: ComponentFixture<UserSoldMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSoldMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSoldMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
