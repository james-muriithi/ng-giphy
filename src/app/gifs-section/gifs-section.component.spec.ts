import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSectionComponent } from './gifs-section.component';

describe('GifsSectionComponent', () => {
  let component: GifsSectionComponent;
  let fixture: ComponentFixture<GifsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
