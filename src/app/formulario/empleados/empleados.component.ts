/* import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

interface RegistroEmpleado {
  id: string;
  nombreCompleto: string;
  email: string;
  edadEmpleado: number;
  horasLaboradas: number;
}

@Component({
  selector: 'app-registro-empleados',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './empleados.component.html',
  styles: ``
})
export default class RegistroEmpleadosComponent implements OnInit {

  formularioRegistro!: FormGroup;
  listaEmpleados: RegistroEmpleado[] = [];
  mostrarLista: boolean = false;
  empleadoModificar: string | null = null;
  idAccion: string = '';  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      id: [''],
      nombreCompleto: [''],
      email: [''],
      edadEmpleado: [''],
      horasLaboradas: ['']
    });

    const empleadosGuardados = localStorage.getItem('listaEmpleados');
    if (empleadosGuardados) {
      this.listaEmpleados = JSON.parse(empleadosGuardados);
    }
  }

  procesarFormulario(): void {
    const empleadoNuevo: RegistroEmpleado = {
      id: this.formularioRegistro.value.id,
      nombreCompleto: this.formularioRegistro.value.nombreCompleto,
      email: this.formularioRegistro.value.email,
      edadEmpleado: this.formularioRegistro.value.edadEmpleado,
      horasLaboradas: this.formularioRegistro.value.horasLaboradas
    };

    if (this.empleadoModificar) {
      this.listaEmpleados = this.listaEmpleados.map(emp =>
        emp.id === this.empleadoModificar ? empleadoNuevo : emp
      );
      this.empleadoModificar = null;
    } else {
      this.listaEmpleados.push(empleadoNuevo);
    }

    localStorage.setItem('listaEmpleados', JSON.stringify(this.listaEmpleados));
    this.formularioRegistro.reset();
  }

  calcularCompensacion(empleado: RegistroEmpleado): { salarioTotal: number, extras: number, normales: number } {
    const horasNormales = empleado.horasLaboradas > 40 ? 40 : empleado.horasLaboradas;
    const horasExtras = empleado.horasLaboradas > 40 ? empleado.horasLaboradas - 40 : 0;

    const salarioNormales = horasNormales * 70;
    const salarioExtras = horasExtras * 140;  
    const salarioTotal = salarioNormales + salarioExtras;

    return { salarioTotal, extras: salarioExtras, normales: salarioNormales };
  }

  calcularPagoTotal(): number {
    return this.listaEmpleados.reduce((total, empleado) => total + 
    this.calcularCompensacion(empleado).salarioTotal, 0);
  }

  mostrarListaEmpleados(): void {
    this.mostrarLista = true;
    const empleadosGuardados = localStorage.getItem('listaEmpleados');
    if (empleadosGuardados) {
      this.listaEmpleados = JSON.parse(empleadosGuardados);
    }
  }

  prepararEdicion(): void {
    const empleadoSeleccionado = this.listaEmpleados.find(emp => emp.id === this.idAccion);
    if (empleadoSeleccionado) {
      this.formularioRegistro.patchValue(empleadoSeleccionado);
      this.empleadoModificar = this.idAccion;
    }
  }

  eliminarEmpleado(): void {
    this.listaEmpleados = this.listaEmpleados.filter(emp => emp.id !== this.idAccion);
    localStorage.setItem('listaEmpleados', JSON.stringify(this.listaEmpleados));
  }
}
 */