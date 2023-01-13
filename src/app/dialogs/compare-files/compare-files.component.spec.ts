import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareFilesComponent } from './compare-files.component';

describe('CompareFilesComponent', () => {
  let component: CompareFilesComponent;
  let fixture: ComponentFixture<CompareFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
