import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLandingZoneComponent } from './file-landing-zone.component';

describe('FileLandingZoneComponent', () => {
  let component: FileLandingZoneComponent;
  let fixture: ComponentFixture<FileLandingZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileLandingZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileLandingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
