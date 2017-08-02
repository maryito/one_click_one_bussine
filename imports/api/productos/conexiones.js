import { DDP } from 'meteor/ddp';
export const conexiones = {};

// Establecemos la conexion con sitio de los fabricantes
// con la condicion que no reintente conectarse si no hay conexion
conexiones.fab = DDP.connect('http://localhost:4500');

// Establecemos la conexion con sitio de los proveedores
// con la condicion que no reintente conectarse si no hay conexion
conexiones.prov = DDP.connect('http://localhost:4000');
