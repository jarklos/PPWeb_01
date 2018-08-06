import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataMenuComponent } from './user-data-menu.component';

describe('UserDataMenuComponent', () => {
  let component: UserDataMenuComponent;
  let fixture: ComponentFixture<UserDataMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
