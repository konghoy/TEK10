export interface Proyecto {
    id: number;
    clienteId: number;
    tekid: string;
    nombreproyecto: string;
    estatus: string;
    descripcion: string
    contactogeneral: string
    contactotecnico: string
    tipoproyecto: string
    teminopago: string
    piezasoriginales: number;
    piezasespejo: number;
    totalpiezas: number;
    fechaalta: number;
    fechalimite: string;
    total: number;

}
