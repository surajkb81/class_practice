import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOutputComponent } from './child-output.component';

describe('ChildOutputComponent', () => {
  let component: ChildOutputComponent;
  let fixture: ComponentFixture<ChildOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
