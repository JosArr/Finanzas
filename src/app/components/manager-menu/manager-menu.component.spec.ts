import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMenuComponent } from './manager-menu.component';

describe('ManagerMenuComponent', () => {
  let component: ManagerMenuComponent;
  let fixture: ComponentFixture<ManagerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
