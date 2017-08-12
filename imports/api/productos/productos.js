// Definition of the productos collection

import { Mongo } from 'meteor/mongo';

// base de datos local
export const Productos = new Mongo.Collection('productos');

if (Meteor.isServer) {
    // creacion de indexes
    Productos._ensureIndex({ nombre: 1, precio: 1, tiempo: 1 });
}
