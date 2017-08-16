// Definition of the productos collection

import { Meteor } from 'meteor/meteor';
import { conexion } from './conexiones.js';

// base de datos remotas
export const Productos = new Meteor.Collection('productos', conexion);
export const Inventario = new Meteor.Collection('inventario', conexion);
