import { Injectable } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }
  async create( createSongDto: CreateJatekDto) {
    return await this.db.jatek.create({
      data: createSongDto
    });
  }

  async findAll() {
    return this.db.jatek.findMany();
  }
  
  async findOne(id: number) {
    try{
    return this.db.jatek.findUnique({
      where: { id },
    })
    ;}
    catch{
      return "Nincs ilyen Id-val rendelkező gyerek a listában";
    }
  }


  async update(id: number, updateJatekDto: UpdateJatekDto) {
    const updatedJatek = await this.db.jatek.update({
      where: { id },
      data: updateJatekDto,
    });
    return updatedJatek;
  }

  async remove(id: number) {
    try {
      await this.db.jatek.delete({
        where: { id },
      });
    }
    catch {
      return undefined;
    }
  }
}
