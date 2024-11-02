import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import  {PrismaModule} from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [CategoriaService],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
