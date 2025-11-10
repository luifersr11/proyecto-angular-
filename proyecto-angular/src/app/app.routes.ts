// src/app/app.routes.ts
import { Routes } from '@angular/router';

// --- 1. IMPORTA TU NUEVO COMPONENTE ---
import { StockReactiveComponent } from './stock-reactive/stock-reactive.component';

export const routes: Routes = [
    // (Aquí podrían estar tus otras rutas)

    // --- 2. AÑADE EL OBJETO DE RUTA ---
    { path: 'stock-reactivo', component: StockReactiveComponent }
    // --------------------------------
];