import { Component, OnInit } from '@angular/core';
import { Cotizacion } from 'src/app/interfaces/Cotizacion';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { DataService } from 'src/app/services/data.service';
import { ProjectoService } from 'src/app/services/projecto.service';

@Component({
  selector: 'app-projectos',
  templateUrl: './projectos.component.html',
  styleUrls: ['./projectos.component.scss']
})
export class ProjectosComponent implements OnInit {
  listaCotizaciones: Cotizacion [] = [];
  listaProyectos: Proyecto [] = [];

  constructor( 
    private apiCotizacion: CotizacionService,
    private apiProjecto: ProjectoService,
    private dataService: DataService
  ) {  }

  ngOnInit(): void {
    this.obtenerCotizacione();
    this.obtenerProyectos();
  }

  obtenerCotizacione(){
    this.apiCotizacion.obtenerCotizaciones().subscribe(
      (data) => {
        //this.arrayExamenes = data;  
        this.listaCotizaciones = data;
        console.log(data.length);
        console.log(this.listaCotizaciones);
        /*for (let index = 0; index < data.length; index++) {
          console.log(data[index].idMateria);
          this.arrayExamenes.push(data[index].idExamen + ' - ' + data[index].idMateria);
          this.arrayExamenesInt.push({ idExamen: data[index].idExamen, nombreExamen: data[index].nombreExamen });
        }*/
      },
      (error) => {
        console.error('Error fetching data list:', error);
      }
    );
  }

  obtenerProyectos(){
    this.apiProjecto.obtenerProyectos().subscribe(
      (data) => {
        //this.arrayExamenes = data;
        this.listaProyectos = data;
        console.log(data);
        console.log(this.listaProyectos);
        /*for (let index = 0; index < data.length; index++) {
          console.log(data[index].idMateria);
          this.arrayExamenes.push(data[index].idExamen + ' - ' + data[index].idMateria);
          this.arrayExamenesInt.push({ idExamen: data[index].idExamen, nombreExamen: data[index].nombreExamen });
        }*/
      },
      (error) => {
        console.error('Error fetching data list:', error);
      }
    );
  }
}