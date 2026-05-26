import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateEstudianteDto } from '../dto/estudiante.dto';
import { EstudiantesService } from '../services/estudiantes.service';
@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudianteService: EstudiantesService) {}

  @MessagePattern({ cmd: 'get_all_student' })
  async getAll() {
    const rows = await this.estudianteService.getAll();

    const datos = {
      data: rows,
      count: rows.length,
    };

    return datos;
  }

  @MessagePattern({ cmd: 'get_one_student' })
  getOne(@Payload(ParseIntPipe) id: number) {
    return this.estudianteService.getOne(id);
  }

  @MessagePattern({ cmd: 'create_student' })
  async create(@Payload() estudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteService.create(estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro agregado con exito',
    };

    return datos;
  }

  @MessagePattern({ cmd: 'update_student' })
  update(@Payload() payload: { id: number; data: CreateEstudianteDto }) {
    const { id, data } = payload;
    return this.estudianteService.update(id, data);
  }

  @MessagePattern({ cmd: 'remove_student' })
  remove(@Payload(ParseIntPipe) id: number, payload: CreateEstudianteDto) {
    return this.estudianteService.delete(id, payload);
  }
}
