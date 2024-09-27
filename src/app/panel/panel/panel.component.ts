import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartsData from '../../shared/data/default-dashboard';
import { FormBuilder } from '@angular/forms';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { DataService } from 'src/app/services/data.service';
import { Cotizacion } from 'src/app/interfaces/Cotizacion';
import { ProjectoService } from 'src/app/services/projecto.service';
import { Proyecto } from 'src/app/interfaces/Proyecto';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  //listaCotizaciones: Cotizacion ;
  listaCotizaciones: Cotizacion [] = [];
  listaProyectos: Proyecto [] = [];

  constructor(
    private apiCotizacion: CotizacionService,
    private apiProjecto: ProjectoService,
    private dataService: DataService
  ) { 
  }

  ngOnInit(): void {
    console.log(' -- ngOnInit  PanelComponent ');
    //$.getScript("./assets/js/digital-marketing.js");
    //$.getScript("./assets/js/alternate-dashboard.js");
    this.obtenerCotizaciones();
    this.obtenerProyectos();
    //LDRG
    
  }


  obtenerCotizaciones(){
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
