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
  async create( createJatekDto: CreateJatekDto) {
    return await this.db.jatek.create({
      data: createJatekDto
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

/*   async removeJatek(gyerekId: number, jatekId: number) {
    return await this.db.gyerek.update({
      where: {
        id: gyerekId
      },
      data: {
        jatekok: {
          disconnect: { id: jatekId }
        }
      }
    });
  } 
  
  async addJatek(gyerekId: number, jatekId: number) {
    return await this.db.gyerek.update({
      where: {
        id: gyerekId
      },
      data: {
        jatekok: {
          connect: { id: jatekId }
        }
      }
    });
  } */
  
}
