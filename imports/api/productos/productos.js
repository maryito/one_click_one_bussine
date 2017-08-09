// Definition of the productos collection

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { conexion } from './conexiones.js';
// base de datos local
export const Productos = new Mongo.Collection('productos');

// base de datos remotas
// export const Fabricantes = new Meteor.Collection('Proveedores', conexion);
export const Proveedores = new Meteor.Collection('productos', conexion);
