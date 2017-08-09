// Definition of the productos collection

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { conexiones } from './conexiones.js';
// base de datos local
export const Productos = new Mongo.Collection('productos');

// base de datos remotas
export const Fabricantes = new Meteor.Collection('fabricantes', conexiones);
export const Proveedores = new Meteor.Collection('proveedores', conexiones);
