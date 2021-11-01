import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 /* it('shold contain link to dashboard', waitForAsync(()=>{
    expect(fixture.nativeElement.querySelectorAll('button')[0].getAttribute('routerlink')).toEqual('/user');
 }));
 it('shold contain link to add page', waitForAsync(()=>{
  expect(fixture.nativeElement.querySelectorAll('button')[2].getAttribute('routerlink')).toEqual('/addpage');
}));
it('shold contain four navigation buttons', waitForAsync(()=>{
  expect(fixture.nativeElement.querySelector('button').lenght).toEqual(4);
}));*/
});
