import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from '../prisma/prisma.module';  // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Asegúrate de importar PrismaModule aquí
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
