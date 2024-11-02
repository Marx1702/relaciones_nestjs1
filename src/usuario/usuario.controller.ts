import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  createUsuario(@Body() body: { nombre: string, email: string, perfil: { bio: string } }) {
    return this.usuarioService.createUsuario(body);
  }

  @Get(':id')
  getUsuario(@Param('id') id: number) {
    return this.usuarioService.getUsuario(Number(id));
  }
}
