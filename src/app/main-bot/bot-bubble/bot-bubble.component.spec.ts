import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotBubbleComponent } from './bot-bubble.component';

describe('BotBubbleComponent', () => {
  let component: BotBubbleComponent;
  let fixture: ComponentFixture<BotBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
