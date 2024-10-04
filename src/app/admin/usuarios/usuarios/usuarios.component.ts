import { Component, OnInit } from '@angular/core';
import { Cotizacion } from 'src/app/interfaces/Cotizacion';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { Usuario } from 'src/app/interfaces/Usuario';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { DataService } from 'src/app/services/data.service';
import { ProjectoService } from 'src/app/services/projecto.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  listaCotizaciones: Cotizacion [] = [];
  listaProyectos: Proyecto [] = [];
  listaUsuarios: Usuario [] = [];

  constructor( 
    private apiCotizacion: CotizacionService,
    private apiProjecto: ProjectoService,
    private apiUsuario: UsuarioService,
    private dataService: DataService
  ) {  }

  ngOnInit(): void {
    this.obtenerUsuarios();
    
  }

  obtenerUsuarios(){
    this.apiUsuario.obtenerUsuarios().subscribe(
      (data) => {
        //this.arrayExamenes = data;  
        console.log(data);
        this.listaUsuarios = data;
        //console.log(data.length);
        //console.log(this.listaCotizaciones);
        
      },
      (error) => {
        console.error('Error fetching data list:', error);
      }
    );
  }

  clickValidar(id : string){

  }





}
