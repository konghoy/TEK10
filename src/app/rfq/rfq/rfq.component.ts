import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { ProjectoService } from 'src/app/services/projecto.service';

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
  numeroProyectosExistentes = 0;

  listaPiezasOriginales = [{
    item: 0, nombre: '',
    dibujo2d: '',
    dibujo3d: '',
    nombre3d: '',
    cantidad: null
  }];
  listaPiezasEspejo = [{
    item: 0,
    nombre: '',
    dibujo2d: '',
    dibujo3d: '',
    nombre3d: '',
    cantidad: null
  }];
  nuevoElemento = {
    item: 0,
    nombre: '',
    dibujo2d: '',
    dibujo3d: '',
    nombre3d: '',
    cantidad: null
  };

  editing: boolean[] = [];
  users = [{
    name: 'Juan Pérez',
    email: 'juan@example.com'
  },
  {
    name: 'Ana García',
    email: 'ana@example.com'
  },
  {
    name: 'Luis Rodríguez',
    email: 'luis@example.com'
  }];

  totalPiezasOriginal: number = 0;
  totalPiezasEspejo: number = 0;
  public formularioRegistro: FormGroup;
  fechaActual: string = '';
  minutoActual: string = '';
  fecha = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private apiCotizacion: CotizacionService,
    private apiProjecto: ProjectoService,
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

  public tekid = new FormControl('', Validators.required);
  public nombreproyecto = new FormControl('', Validators.required);
  public estatus = new FormControl('Creado');
  public descripcion = new FormControl('');
  public contactogeneral = new FormControl('', Validators.required);
  public contactotecnico = new FormControl('');
  public tipoproyecto = new FormControl('');
  public teminopago = new FormControl('');
  public piezasoriginales = new FormControl('');
  public piezasoespejo = new FormControl(0);
  public totalpiezas = new FormControl(0);
  public fechaalta = new FormControl('');
  public fechalimite = new FormControl('');
  public terminopago = new FormControl('');
  public total = new FormControl(0);

  public formTiempo = new FormGroup({
    tipoproyecto: this.tipoproyecto,
    fechalimite: this.fechalimite,
    terminopago: this.terminopago
  });

  public formProyecto = new FormGroup({
    tekid: this.tekid,
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
    fechaalta: this.fechaalta,
    fechalimite: this.fechalimite,
    total: this.total
  });

  ngOnInit(): void {
    //this.obtenerNumeroProyectos();
    console.log(this.obtenerNumeroProyectos());

    this.formProyecto.value
    console.log(' -- ngOnInit  RfqComponent ');
    this.listaPiezasOriginales.pop();
    this.listaPiezasEspejo.pop();
    //const fecha = new Date();
    // Obtener el formato de fecha (yyyy-MM-dd)
    console.log(this.fecha.toISOString());
    this.fechaActual = this.fecha.toISOString().split('T')[0];
    console.log(this.fechaActual);
    // Obtener los minutos formateados (HH:mm)
    const horas = this.fecha.getHours().toString().padStart(2, '0');
    const minutos = this.fecha.getMinutes().toString().padStart(2, '0');
    this.minutoActual = `${horas}:${minutos}`;
    console.log(this.minutoActual);
  }

  obtenerNumeroProyectos() {
    console.log(' -- obtenerNumeroProyectos ');
    this.apiProjecto.obtenerNumeroProyectos().subscribe(
      (data) => {
        console.log(data);
        this.numeroProyectosExistentes = data;
      },
      (error) => {
        console.error('Error fetching data list:', error);
      }
    );
  }

  fechas() {
    console.log(' ------- 1');
    console.log(this.numeroProyectosExistentes);
    var cadenatekid = '';
    const fechaActualDate: Date = new Date();
    console.log(fechaActualDate);
    const fechaactual: string = fechaActualDate.toLocaleDateString();
    //const fechaactual: string = fechaActualDate.toLocaleDateString();
    const { minutosActual, segundosActual, diaActual, mesActual, anioActual } = this.obtenerFechaActual(fechaActualDate);
    console.log(`Minutos: ${minutosActual}, Segundos: ${segundosActual}, dia: ${diaActual}, mes: ${mesActual}, anio: ${anioActual.toString().substring(2, 5)}`);

    cadenatekid = anioActual.toString().substring(2, 5) + mesActual + diaActual + this.formProyecto.value.tipoproyecto.substring(0, 1) + '000' + (Number(this.numeroProyectosExistentes) + 1);

    console.log(cadenatekid);
    this.formProyecto.value.tekid = cadenatekid;
    console.log(' ------- 2');
    console.log(this.formProyecto.value);
    //console.log(`Minutos: ${minutosLimite}, Segundos: ${segundosLimite}, dia: ${diaLimite}, mes: ${mesLimite}, anio: ${anioLimite}`);

  }

  obtenerFechaActual(fecha: Date): { minutosActual: string, segundosActual: string, diaActual: string, mesActual: string, anioActual: string } {
    const minutosActual: string = fecha.getMinutes().toString();
    const segundosActual: string = fecha.getSeconds().toString();
    //const diaActual: string = fecha.getDate().toString();
    const diaActual: string = fecha.getDate().toString().length == 1 ? '0' + fecha.getDate().toString() : fecha.getDate().toString();
    const mesActual: string = (fecha.getMonth() + 1).toString().length == 1 ? '0' + (fecha.getMonth() + 1).toString() : (fecha.getMonth() + 1).toString();
    const anioActual: string = fecha.getFullYear().toString();
    return { minutosActual, segundosActual, diaActual, mesActual, anioActual };
  }

  obtenerFechaLimite(fecha: Date): { minutosLimite: number, segundosLimite: number, diaLimite: number, mesLimite: number, anioLimite: number } {
    const minutosLimite: number = fecha.getMinutes();
    const segundosLimite: number = fecha.getSeconds();
    const diaLimite: number = fecha.getDate();
    const mesLimite: number = fecha.getMonth() + 1;
    const anioLimite: number = fecha.getFullYear();
    return { minutosLimite, segundosLimite, diaLimite, mesLimite, anioLimite };
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

  clickGuardar() {
    console.log(' -- clickGuardar 1111111');
    console.log(this.formProyecto.value);
    console.log(this.formTiempo.value);
  }

  guardarCotizacion(){
    console.log(' -- EMPIEZA A CREAR PROYECTO');
    const confirmacion = window.confirm('¿Estás seguro de que deseas enviar RFQ ?');
    if (confirmacion) {    
      console.log(this.formProyecto.value);      
      this.apiProjecto.guardarProyecto(this.formProyecto.value).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
        }, (error) => {
          console.error('Error adding data:', error);
        }
      );      
    } else {
      console.log('Acción cancelada');
    }    
  }

  clickGuardars() {
    this.formProyecto.value.piezasoriginales = this.listaPiezasOriginales.length;
    this.formProyecto.value.piezasespejo = this.listaPiezasEspejo.length;
    this.formProyecto.value.totalpiezas = this.listaPiezasOriginales.length + this.listaPiezasEspejo.length;
    this.formProyecto.value.total = 0;
    this.formProyecto.value.fechaalta = this.fecha;
    this.formProyecto.value.fechalimite = this.fecha;
    console.log(this.formProyecto.value.nombreproyecto)
    console.log(this.formProyecto.value.estatus)
    console.log(this.formProyecto.value.descripcion);
    console.log(this.formProyecto.value.contactogeneral)
    console.log(this.formProyecto.value.contactotecnico)
    console.log(this.formProyecto.value.piezasoriginales)
    console.log(this.formProyecto.value.piezasespejo)
    console.log(this.formProyecto.value.totalpiezas)
    console.log(this.formProyecto.value);
    console.log(this.formTiempo.value);
    const confirmacion = window.confirm('¿Estás seguro de que deseas enviar RFQ ?');
    if (confirmacion) {    
      console.log(this.formProyecto.value);
      /*this.api.guardarCotizacion(this.formProyecto.value).subscribe(
        (response) => {
          console.log('Data added successfully:', response);          
        }, (error) => {
          console.error('Error adding data:', error);
        }
      );*/
      this.apiProjecto.guardarProyecto(this.formProyecto.value).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
        }, (error) => {
          console.error('Error adding data:', error);
        }
      );
      // Lógica para eliminar el elemento
    } else {
      console.log('Acción cancelada');
    }     
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

  submitForm() { }
}