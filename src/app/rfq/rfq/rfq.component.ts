import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent implements OnInit {

  selectedFiles: File[] = [];
  banderaTabla = false;
  


  constructor() { }

  ngOnInit(): void {
    console.log(' -- ngOnInit  RfqComponent ');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.ui.widget.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.fileupload.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.iframe-transport.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js');
    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript('./assets/js/custom-file-upload.js');
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
      console.log('Archivos seleccionados:', this.selectedFiles);
    }
  }


  onUpload(): void {
    if (this.selectedFiles.length > 0 ) {
      console.log('Subiendo archivo:', this.selectedFiles);
      for (let index = 0; index < this.selectedFiles.length; index++) {
        console.log('Subiendo archivo:', this.selectedFiles[index].name);        
      }
      this.banderaTabla =true;
      //Aquí puedes manejar el archivo seleccionado, por ejemplo, enviarlo a un servidor.Implementa tu lógica de subida, por ejemplo con un servicio HTTP
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

}
