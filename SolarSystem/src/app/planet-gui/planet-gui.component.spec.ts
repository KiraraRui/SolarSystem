import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetGuiComponent } from './planet-gui.component';

describe('PlanetGuiComponent', () => {
  let component: PlanetGuiComponent;
  let fixture: ComponentFixture<PlanetGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
