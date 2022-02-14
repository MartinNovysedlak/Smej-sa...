import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserjokeComponent } from './userjoke.component';

describe('UserjokeComponent', () => {
  let component: UserjokeComponent;
  let fixture: ComponentFixture<UserjokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserjokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserjokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
