import { Component, OnInit } from '@angular/core';
import { Cotizacion } from 'src/app/interfaces/Cotizacion';
import { Item } from 'src/app/interfaces/Item';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { DataService } from 'src/app/services/data.service';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  listaCotizaciones: Cotizacion [] = [];
  listaItems: Item [] = [];

  constructor( 
    private apiItems: ItemService,
    private dataService: DataService
  ) {  }

  ngOnInit(): void {
    this.obtenerCotizacione();
  }

  obtenerCotizacione(){
    this.apiItems.obtenerItems().subscribe(
      (data) => {
        //this.arrayExamenes = data;  
        console.log(data);
        this.listaItems = data;
        console.log(data.length);
        console.log(this.listaItems);
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
