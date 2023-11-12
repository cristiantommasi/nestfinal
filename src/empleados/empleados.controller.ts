import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmployeeModel } from './employeeModel';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly servicio: EmpleadosService) {}

  @Get()
  getEmpleados() {
    return this.servicio.getEmpleados();
  }

  @Get(':id')
  getEmpleadoById(@Param('id') id: number) {
    return this.servicio.getEmpleadoById(id);
  }

  @Post()
  addEmpleado(@Body() modelo: EmployeeModel) {
    return this.servicio.addEmpleado(modelo);
  }

  @Delete(':id')
  deleteEmpleado(@Param('id') id: string) {
    return this.servicio.deleteEmpleado(id);
  }

  @Put(':id')
  updateEmpleado(@Body() modelo: EmployeeModel, @Param('id') id: string) {
    return this.servicio.updateEmpleado(id, modelo);
  }
}
