import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityScreenComponent } from './identity-screen.component';

describe('IdentityScreenComponent', () => {
  let component: IdentityScreenComponent;
  let fixture: ComponentFixture<IdentityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
