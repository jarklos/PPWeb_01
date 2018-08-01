import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCursoComponent } from './videos-curso.component';

describe('VideosCursoComponent', () => {
  let component: VideosCursoComponent;
  let fixture: ComponentFixture<VideosCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
