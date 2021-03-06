import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public totalUsuarios:number= 0;
  public usuarios:Usuario[] = [];
  public desde:number = 0;


  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.usuarioService.cargarUsuarios(this.desde)
    .subscribe(({total, usuarios})=> {
      this.totalUsuarios = total;
      // if(usuarios.length !==0) {
        this.usuarios = usuarios;
      // }
    });
  }

  cambiarPagina(valor:number) {
    this.desde += valor;

    if(this.desde < 0) {
      this.desde = 0;
    } else if(this.desde >= this.totalUsuarios) {
      this.desde -= valor; 
    }

    this.cargarUsuario();

  }

}
