import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  @Post()
  createCategoria(@Body('nombre') nombre: string) {
    return this.categoriaService.createCategoria(nombre);
  }

  @Post(':id/producto')
  addProducto(@Param('id') id: number, @Body() body: { nombre: string, precio: number }) {
    return this.categoriaService.addProducto(Number(id), body);
  }

  @Get(':id')
  getCategoria(@Param('id') id: number) {
    return this.categoriaService.getCategoria(Number(id));
  }
}
