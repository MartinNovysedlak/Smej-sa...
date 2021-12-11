import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show jokes', waitForAsync(()=>{
    expect(fixture.nativeElement.querySelector('li').textContent).toEqual('account_circleMartin - Ide traktor a zabočífavorite');
  }));
  it('should use ngFor', waitForAsync(()=>{
    expect(fixture.nativeElement.querySelectorAll('ul')[0].getAttribute('routerlink')).toEqual('let vtip of vtipy');
  }));

});
