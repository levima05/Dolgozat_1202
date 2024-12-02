import { Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }
  async create( createGyerekDto: CreateGyerekDto) {
    return await this.db.gyerek.create({
      data: createGyerekDto
    });
  }

  async findAll() {
    return this.db.gyerek.findMany();
  }

  async findOne(id: number) {
    try{
    return this.db.gyerek.findUnique({
      where: { id },
    });
    }
    catch{
      return "Nincs ilyen Id-val rendelkező gyermeks"
    }
  }

  async update(id: number, updateGyerekDto: UpdateGyerekDto) {
    const updatedGyerek = await this.db.gyerek.update({
      where: { id },
      data: updateGyerekDto,
    });
    return updatedGyerek;
  }

  async remove(id: number) {
    try {
      await this.db.gyerek.delete({
        where: { id },
      });
    }
    catch {
      return undefined;
    }
  }
}
