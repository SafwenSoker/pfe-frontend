import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProjectComponent } from './get-project.component';

describe('GetProjectComponent', () => {
  let component: GetProjectComponent;
  let fixture: ComponentFixture<GetProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProjectComponent]
    });
    fixture = TestBed.createComponent(GetProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
