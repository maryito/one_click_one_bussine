import { DDP } from 'meteor/ddp';

// Establecemos la conexion con sitio de los proveedores
// con la condicion que no reintente conectarse si no hay conexion
// export const conexiones = DDP.connect('http://localhost:4000', { retry: false });
export const conexion = DDP.connect('http://localhost:4000');

