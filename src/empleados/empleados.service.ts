import { Injectable } from '@nestjs/common';
import { EmployeeModel } from './employeeModel';

@Injectable()
export class EmpleadosService {
  empleados = [];

  constructor() {
    const empleado = {
      id: 1,
      empleado: 'Juan Monaco',
      salario: 1000,
      telefono: 1234567,
    };

    this.empleados.push(empleado);
  }

  getEmpleados() {
    return this.empleados;
  }

  getEmpleadoById(id): string {
    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id == id) {
        return this.empleados[i];
      }
    }
    return 'No se encontro el empleado.';
  }

  addEmpleado(modelo: EmployeeModel) {
    const empleado = {
      id: modelo.id,
      nombre: modelo.nombre,
      salario: modelo.salario,
      telefono: modelo.telefono,
    };
    this.empleados.push(empleado);
    return 'Empleado agregado con exito.';
  }

  updateEmpleado(id: string, modelo: EmployeeModel) {
    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id == id) {
        this.empleados[i].salario = modelo.salario;
        return 'Empleado modificado con exito.';
      }
    }
    return 'No se encontro el empleado a modificar.';
  }

  deleteEmpleado(id: string) {
    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id == id) {
        this.empleados.splice(i, 1);
        return 'Empleado eliminado con exito.';
      }
    }
    return 'no se encontro el empleado a modificar.';
  }
}
