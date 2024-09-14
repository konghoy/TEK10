import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CotizacionService } from 'src/app/services/cotizacion.service';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent implements OnInit {

  selectedFiles: File[] = [];
  banderaTablaOriginales = true;
  banderaTablaPEspejo = true;
  texto3d = 'Cargar 3d';
  banderaPiezasOriginalesVacia = 0;
  banderaPiezasEspejaVacia = 0;

  piezasOriginalesCount = 0;
  piezasEspejoCount = 0;
  piezasTotalesCount = 0;

  listaPiezasOriginales = [    { item: 0, nombre: '', dibujo2d: '', dibujo3d: '', nombre3d: '', cantidad: null }  ];
  listaPiezasEspejo = [    { item: 0, nombre: '', dibujo2d: '', dibujo3d: '', nombre3d: '', cantidad: null }  ];
  nuevoElemento = {    item: 0,    nombre: '',    dibujo2d: '',    dibujo3d: '',    nombre3d: '',    cantidad: null  };

  editing: boolean[] = [];
  users = [{ name: 'Juan Pérez', email: 'juan@example.com' }, { name: 'Ana García', email: 'ana@example.com' }, { name: 'Luis Rodríguez', email: 'luis@example.com' } ];
  
  totalPiezasOriginal: number = 0;
  totalPiezasEspejo: number = 0;
  public formularioRegistro: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private api: CotizacionService
  ) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });

    //this.editing = this.users.map(() => false);
    this.editing = this.listaPiezasOriginales.map(() => false);
  }

  public tekid = new FormControl('TEKAUT13924', Validators.required);
  public nombreproyecto = new FormControl('', Validators.required);
  public estatus = new FormControl('CREADO');
  public descripcion = new FormControl('');
  public contactogeneral = new FormControl('', Validators.required);
  public contactotecnico = new FormControl('');
  public tipoproyecto = new FormControl('Automatizacion');
  public teminopago = new FormControl('30 DIAS');
  public piezasoriginales = new FormControl('');
  public piezasoespejo = new FormControl(0);
  public totalpiezas = new FormControl(0);
  public fechaalta = new FormControl('12/09/2024');
  public fechalimite = new FormControl('30/09/2024');
  public total = new FormControl(0);

  public formCotizacion = new FormGroup({
    tekid:this.tekid,
    nombreproyecto: this.nombreproyecto,
    estatus: this.estatus,
    descripcion: this.descripcion,
    contactogeneral: this.contactogeneral,
    contactotecnico: this.contactotecnico,
    tipoproyecto: this.tipoproyecto,
    teminopago: this.teminopago,

    piezasoriginales: this.piezasoriginales,
    piezasoespejo: this.piezasoespejo,
    totalpiezas: this.totalpiezas,
    fechaalta:this.fechaalta,
    fechalimite:this.fechalimite,
    total :this.total
  
  });

  ngOnInit(): void {    
    console.log(' -- ngOnInit  RfqComponent ');
    this.listaPiezasOriginales.pop();
    this.listaPiezasEspejo.pop();
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

  clickeliminar3d(item: number) {
    console.log('--clickeliminar3d ' + item);
  }

  onFilesSelected(event: Event, bandera: string): void {
    console.log(bandera);
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
      console.log('Archivos seleccionados:', this.selectedFiles);
      this.onUpload(bandera);
    }
  }

  onUpload(bandera: string): void {
    //console.log(this.listaPiezasOriginales);  
    console.log(this.listaPiezasOriginales.length);
    if (this.listaPiezasOriginales.length == 0) {
      this.banderaPiezasOriginalesVacia = 1;
    } else {
      this.banderaPiezasOriginalesVacia = 2;
    }

    if (this.listaPiezasEspejo.length == 0) {
      this.banderaPiezasEspejaVacia = 1;
    } else {
      this.banderaPiezasEspejaVacia = 2;
    }

    console.log('Bandera :', this.banderaPiezasOriginalesVacia);

    if (this.selectedFiles.length > 0) {
      //this.listaPiezasOriginales.pop();
      //this.listaPiezasEspejo.pop();
      console.log(this.listaPiezasOriginales);
      console.log(this.listaPiezasEspejo);
      console.log('Subiendo archivo:', this.selectedFiles);

      if (bandera == '1') {//BANDERA 1 PIEZAS ORIINALES
        console.log(' Bandera 1');
        for (let index = 0; index < this.selectedFiles.length; index++) {
          if (this.banderaPiezasOriginalesVacia == 1) {
            this.nuevoElemento.item = index + 1;
          } else if (this.banderaPiezasOriginalesVacia == 2) {
            this.nuevoElemento.item = this.listaPiezasOriginales.length + 1;
          }
          this.nuevoElemento.nombre = this.selectedFiles[index].name;
          this.nuevoElemento.dibujo2d = 'Disponible';
          this.nuevoElemento.dibujo3d = 'Disponibles';
          if (index == 1) {
            this.nuevoElemento.nombre3d = 'Fondo23445.jpg';
          } else {
            this.nuevoElemento.nombre3d = '--';
          }
          this.nuevoElemento.cantidad = 1;
          console.log(this.nuevoElemento);
          this.listaPiezasOriginales.push(this.nuevoElemento);
          this.totalPiezasOriginal++;
          this.nuevoElemento = { item: 0, nombre: '', dibujo2d: '', dibujo3d: '', nombre3d: '/', cantidad: null }; // Limpiar formulario
          this.banderaTablaOriginales = true;
        }
      } else if (bandera == '2') {

        //BANDERA 2 PIEZAS  ESPEJO      
        for (let index = 0; index < this.selectedFiles.length; index++) {
          console.log('contador ' + (index + 1));
          //this.nuevoElemento.item = (index + 1);
          
          if (this.banderaPiezasEspejaVacia == 1) {
            this.nuevoElemento.item = index + 1;
          } else if (this.banderaPiezasEspejaVacia == 2) {
            this.nuevoElemento.item = this.listaPiezasEspejo.length + 1;
          }

          this.nuevoElemento.nombre = this.selectedFiles[index].name;
          this.nuevoElemento.dibujo2d = 'Disponible';
          this.nuevoElemento.dibujo3d = 'Disponibles';
          /*if (index  == 1) {this.nuevoElemento.nombre3d = 'Imagen archivo.png';
          }else{this.nuevoElemento.nombre3d = '--'; }*/
          this.nuevoElemento.nombre3d = '--';
          this.nuevoElemento.cantidad = 1;
          this.listaPiezasEspejo.push(this.nuevoElemento);
          this.totalPiezasEspejo++;
          console.log(this.nuevoElemento);
          this.nuevoElemento = { item: 0, nombre: '', dibujo2d: '', dibujo3d: '', nombre3d: '-', cantidad: null }; // Limpiar formulario
          console.log(this.nuevoElemento);
          this.banderaTablaPEspejo = true;
        }
      }
      //Aquí puedes manejar el archivo seleccionado, por ejemplo, enviarlo a un servidor.Implementa tu lógica de subida, por ejemplo con un servicio HTTP
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
    
    console.log(this.listaPiezasOriginales.length);
    console.log(this.listaPiezasEspejo.length);
  }

  onButtonClickPiezaOriginal(item: string) {
    console.log(' onButtonClickPiezaOriginal');
    console.log(item);
  }
  onButtonClickPiezaEspejo(item: string) {
    console.log(' onButtonClickPiezaEspejo');
    console.log(item);
  }

  clickGuardar(){
    console.log(' -- clickGuardar 1111111');

  }

  clickGuardars(){
    this.formCotizacion.value.piezasoriginales= this.listaPiezasOriginales.length;
    this.formCotizacion.value.piezasespejo = this.listaPiezasEspejo.length;
    this.formCotizacion.value.totalpiezas= this.listaPiezasOriginales.length+this.listaPiezasEspejo.length;
    this.formCotizacion.value.total=0;
    console.log(' -- clickGuardar 11122222' );
    console.log(this.formCotizacion.value.nombreproyecto)
    console.log(this.formCotizacion.value.estatus)
    console.log(this.formCotizacion.value.descripcion);
    console.log(this.formCotizacion.value.contactogeneral)
    console.log(this.formCotizacion.value.contactotecnico)

    console.log(this.formCotizacion.value.piezasoriginales)
    console.log(this.formCotizacion.value.piezasespejo)
    console.log(this.formCotizacion.value.totalpiezas)

    

    const confirmacion = window.confirm('¿Estás seguro de que deseas enviar RFQ ?');
    
    if (confirmacion) {

      console.log('Elemento eliminado');
      console.log(this.formCotizacion.value);
      this.api.guardarCotizaion(this.formCotizacion.value).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
        //this.ventana('USUARIO AGREGADO EXITOSAMENTE', 'OK');
        //this.llenadoListaUsuarios();
      }, (error) => {
        console.error('Error adding data:', error);
      }
    );
      // Lógica para eliminar el elemento
    } else {
      console.log('Acción cancelada');
    }
    console.log(' -- clickGuardar 2222222' );

  }

  submitForm() { }
}
