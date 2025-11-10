import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-reactive',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './stock-reactive.component.html',
  styleUrls: ['./stock-reactive.component.css']
})
export class StockReactiveComponent implements OnInit {

  stockForm!: FormGroup;


  // Para saber si estamos creando o editando
  esModoEdicion = false;
  // (En un caso real, esto dependería de si recibes un ID por la URL)
  // -------------------------

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Creas el formulario (como ya lo tienes)
    this.stockForm = this.fb.group({
      producto: ['', [Validators.required, Validators.minLength(3)]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      ubicacion: ['', [Validators.required]],
      proveedor: ['']
    });

 
    this.cargarDatosParaEdicion();
    // ----------------------------------------
  }

  cargarDatosParaEdicion(): void {
    // (En una app real, aquí recibirías un ID de la URL,
    // llamarías a un servicio para traer los datos, etc.)

    // SIMULAMOS LOS DATOS:
    const itemExistente = {
      producto: 'Tornillos 3/4',
      cantidad: 250,
      ubicacion: 'A1',
      proveedor: 'Ferrex S.A.'
    };

    // Si tenemos datos, estamos en modo edición
    if (itemExistente) {
      this.esModoEdicion = true;

      // ¡AQUÍ ESTÁ LA MAGIA!
      // Rellena el formulario con los datos existentes
      this.stockForm.patchValue(itemExistente);
    }
  }

  guardarStock(): void {
    if (this.stockForm.invalid) {
      console.log('Formulario Inválido');
      this.stockForm.markAllAsTouched();
      return;
    }

    
    if (this.esModoEdicion) {
      // Lógica para ACTUALIZAR
      console.log('ACTUALIZANDO DATOS:', this.stockForm.value);
      // Aquí llamarías a:
      // this.miServicio.actualizar(idDelItem, this.stockForm.value).subscribe(...)
    } else {
      // Lógica para CREAR NUEVO
      console.log('CREANDO NUEVO:', this.stockForm.value);
      // Aquí llamarías a:
      // this.miServicio.crear(this.stockForm.value).subscribe(...)
    }
  }


  get productoControl() { return this.stockForm.get('producto'); }
  get cantidadControl() { return this.stockForm.get('cantidad'); }
  get ubicacionControl() { return this.stockForm.get('ubicacion'); }
}