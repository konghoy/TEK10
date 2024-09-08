import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent implements OnInit {

  selectedFiles: File[] = [];
  banderaTablaP = false;
  banderaTablaPEspejo = true;
  listaPiezasOriginales = [
    { item: '',
      nombre: '',
      dibujo2d: '',
      dibujo3d: '',
      cantidad: null }
  ];

  listaPiezasEspejo = [
    { item: '',
      nombre: '',
      dibujo2d: '',
      dibujo3d: '',
      cantidad: null }
  ];

  nuevoElemento = { 
    item: '',
    nombre: '',
    dibujo2d: '',
    dibujo3d: '',
    cantidad: null 
  };

  editing: boolean[] = [];
  users = [
    { name: 'Juan Pérez', email: 'juan@example.com' },
    { name: 'Ana García', email: 'ana@example.com' },
    { name: 'Luis Rodríguez', email: 'luis@example.com' }
  ];
  totalPiezas: number = 0;
  totalPiezasEspejo: number = 0;

  constructor() {
    this.editing = this.users.map(() => false);
  }

  ngOnInit(): void {
    console.log(' -- ngOnInit  RfqComponent ');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.ui.widget.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.fileupload.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.iframe-transport.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js');
    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript('./assets/js/custom-file-upload.js');
  }

  // Cambia el estado de la fila a modo de edición
  editRow(index: number): void {
    this.editing[index] = true;
  }
  // Guarda los cambios y desactiva el modo de edición
  saveRow(index: number): void {
    this.editing[index] = false;
    console.log('Datos guardados:', this.users[index]);
  }
  // Cancela la edición y restaura los valores originales
  cancelEdit(index: number): void {
    this.editing[index] = false;
    console.log('Edición cancelada');
    // Si necesitas restaurar el estado original de los datos, puedes hacerlo aquí
  }
  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
      console.log('Archivos seleccionados:', this.selectedFiles);
      this.onUpload();
    }
  }
  onUpload(): void {    
    console.log(this.listaPiezasOriginales);
    if (this.selectedFiles.length > 0) {
      this.listaPiezasOriginales.pop();
      console.log(this.listaPiezasOriginales);
      console.log('Subiendo archivo:', this.selectedFiles);
      for (let index = 0; index < this.selectedFiles.length; index++) {
        console.log('contador ' + (index + 1));
        //console.log('Subiendo archivo:', this.selectedFiles[index].name);
        this.nuevoElemento.item = (index + 1).toString();
        this.nuevoElemento.nombre = this.selectedFiles[index].name;
        this.nuevoElemento.dibujo2d = 'Disponible';
        this.nuevoElemento.dibujo3d = 'Disponibles';
        this.nuevoElemento.cantidad = 1;

        this.listaPiezasOriginales.push(this.nuevoElemento);
        this.totalPiezas++;
        console.log(index);
        console.log(this.nuevoElemento);
        this.nuevoElemento = { item: '', nombre: '', dibujo2d: '', dibujo3d: '', cantidad: null }; // Limpiar formulario
        console.log(this.nuevoElemento);

        this.banderaTablaP = true;
      }
      //Aquí puedes manejar el archivo seleccionado, por ejemplo, enviarlo a un servidor.Implementa tu lógica de subida, por ejemplo con un servicio HTTP
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

}
