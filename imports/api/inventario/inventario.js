// Definition of the productos collection

import { Mongo } from 'meteor/mongo';

// base de datos local
export const Inventario = new Mongo.Collection('inventario');

if (Meteor.isServer) {
    // creacion de indexes
    Inventario._ensureIndex({ categoria: 1, proveedor: 1, nombre: 1, precio_unit: 1 });
}

Inventario.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Inventario.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});