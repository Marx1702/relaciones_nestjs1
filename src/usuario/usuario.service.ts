import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Importar PrismaService

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async createUsuario(data: { nombre: string, email: string, perfil: { bio: string } }) {
    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: data.email,
        perfil: {
          create: { bio: data.perfil.bio },
        },
      },
      include: { perfil: true },
    });
  }

  async getUsuario(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: { perfil: true },
    });
  }
}
