// Methods related to productos

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Productos } from './productos.js';
import { ProdSchemas } from './schemas.js';

Meteor.methods({
  'productos.agregar'(producto) {
    const a = ProdSchemas.addValidator(producto);
    console.log(a, producto);
    check(producto, {
      nombre: String,
      cantidad: Number,
      precio: Number,
      proveedor: String,
      marca: String,
    });

    return Productos.insert({
      producto,
      createdAt: new Date(),
    });
  },
});
