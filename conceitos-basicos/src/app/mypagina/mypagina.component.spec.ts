import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypaginaComponent } from './mypagina.component';

describe('MypaginaComponent', () => {
  let component: MypaginaComponent;
  let fixture: ComponentFixture<MypaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MypaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
