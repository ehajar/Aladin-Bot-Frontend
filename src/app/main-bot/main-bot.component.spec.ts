import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBotComponent } from './main-bot.component';

describe('MainBotComponent', () => {
  let component: MainBotComponent;
  let fixture: ComponentFixture<MainBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
