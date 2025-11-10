import { ComponentFixture, TestBed } from '@angular/core/testing';

// --- CORREGIDO AQUÍ ---
import { StockReactiveComponent } from './stock-reactive.component';

// --- Y AQUÍ ---
describe('StockReactiveComponent', () => {
  // --- Y AQUÍ ---
  let component: StockReactiveComponent;
  let fixture: ComponentFixture<StockReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StockReactiveComponent ]
    })
    .compileComponents();


    fixture = TestBed.createComponent(StockReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});