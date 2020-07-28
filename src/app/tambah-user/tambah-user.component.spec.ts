import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahUserComponent } from './tambah-user.component';

describe('TambahUserComponent', () => {
  let component: TambahUserComponent;
  let fixture: ComponentFixture<TambahUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
