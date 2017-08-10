// Methods related to productos

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Productos } from './productos.js';

Meteor.methods({
  'productos.agregar'(prod) {
    check(prod, {
      nombre: String,
      cantidad: Number,
      precio: Number,
      proveedor: String,
      marca: String,
      tiempo: Number,
    });

    return Productos.insert({
      nombre: prod.nombre,
      cantidad: prod.cantidad,
      precio: prod.precio,
      proveedor: prod.proveedor,
      marca: prod.marca,
      tiempo: prod.tiempo,
      createdAt: new Date(),
    });
  },
  'productos.eliminar'(id) {
    check(id, String);
    return Productos.remove(id);
  },
  'productos.actualizar'(prod) {
    check(prod, {
      nombre: String,
      cantidad: Number,
      precio: Number,
      proveedor: String,
      marca: String,
      tiempo: Number,
    });
    console.log(prod);
    // return Productos.update({
    //   nombre: prod.nombre,
    //   cantidad: prod.cantidad,
    //   precio: prod.precio,
    //   proveedor: prod.proveedor,
    //   marca: prod.marca,
    //   tiempo: prod.tiempo,
    //   createdAt: new Date(),
    // });
  },
});
