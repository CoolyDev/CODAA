import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideraccueilPage } from './slideraccueil.page';

describe('SlideraccueilPage', () => {
  let component: SlideraccueilPage;
  let fixture: ComponentFixture<SlideraccueilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideraccueilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideraccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
