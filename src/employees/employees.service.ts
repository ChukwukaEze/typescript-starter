import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    console.log({ createEmployeeDto });
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll() {
    return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    //add
    return `This action returns a #${id} employee`;
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeCreateInput) {
    console.log({ updateEmployeeDto });
    return `This action updates a #${id} employee`;
  }

  async remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
