// Methods related to inventario

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Inventario } from './inventario.js';

Meteor.methods({
  'inventario.agregar'(prod) {
    check(prod, {
      id: String,
      categoria: String,
      nombre: String,
      cantidad: Number,
      precio_unit: Number,
      stock: Number,
      descripcion: String,
      proveedor: String,
    });
    console.log(prod);
    return Inventario.insert(prod);
    // check(prod, {
    //   nombre: String,
    //   cantidad: Number,
    //   precio: Number,
    //   proveedor: String,
    //   marca: String,
    //   tiempo: Number,
    // });

    // return inventario.insert({
    //   id
    //   nombre: prod.nombre,
    //   cantidad: prod.cantidad,
    //   precio: prod.precio,
    //   proveedor: prod.proveedor,
    //   marca: prod.marca,
    //   tiempo: prod.tiempo,
    //   createdAt: new Date(),
    // });
  },
  'inventario.eliminar'(id) {
    check(id, String);
    return inventario.remove(id);
  },
  'inventario.actualizar'(prod) {
    check(prod, {
      nombre: String,
      cantidad: Number,
      precio: Number,
      proveedor: String,
      marca: String,
      tiempo: Number,
    });
    console.log(prod);
    // return inventario.update({
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
