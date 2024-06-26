import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        /*{ titulo: 'Main',url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },// sin '/' asi pertence a dashboard ruta
        { titulo: 'Gráfica', url: 'grafica1' },
        { titulo: 'Promesas', url: 'promesas' },*/
        { titulo: 'Empresas', url: 'company' },
      ]
    },
    /*{
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Hospitales', url: 'hospitales' },
        { titulo: 'Médicos', url: 'medicos' },
      ]
    },*/
    /*{
      titulo: 'Seguridad',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Perfil', url: 'profile' },
        { titulo: 'Tipo Recurso', url: 'type_resource' },
        { titulo: 'Servicios', url: 'service' },
        { titulo: 'Contratos', url: 'contract' },
        { titulo: 'Usuario', url: 'user' },
      ]
    } */
  ];

  constructor() { }
}
