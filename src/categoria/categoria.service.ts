import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async createCategoria(nombre: string) {
    return this.prisma.categoria.create({
      data: { nombre },
    });
  }

  async addProducto(categoriaId: number, productoData: { nombre: string, precio: number }) {
    return this.prisma.producto.create({
      data: {
        nombre: productoData.nombre,
        precio: productoData.precio,
        categoria: { connect: { id: categoriaId } },
      },
    });
  }

  async getCategoria(id: number) {
    return this.prisma.categoria.findUnique({
      where: { id },
      include: { productos: true },
    });
  }
}
