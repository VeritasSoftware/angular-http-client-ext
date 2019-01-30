import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExtendedHttpClientComponent } from './angular-extended-http-client.component';

describe('AngularExtendedHttpClientComponent', () => {
  let component: AngularExtendedHttpClientComponent;
  let fixture: ComponentFixture<AngularExtendedHttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularExtendedHttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExtendedHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
