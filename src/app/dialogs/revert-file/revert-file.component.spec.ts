import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertFileComponent } from './revert-file.component';

describe('RevertFileComponent', () => {
  let component: RevertFileComponent;
  let fixture: ComponentFixture<RevertFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevertFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevertFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
