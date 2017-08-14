// Definition of the productos collection

import { Mongo } from 'meteor/mongo';

// base de datos local
export const Inventario = new Mongo.Collection('inventario');

if (Meteor.isServer) {
    // creacion de indexes
    Inventario._ensureIndex({ id: 1, categoria: 1, proveedor: 1, nombre: 1, precio_unit: 1 });
}
