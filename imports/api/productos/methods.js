// Methods related to productos

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Productos } from './productos.js';
import { ProdSchemas } from './schemas.js';

Meteor.methods({
  'productos.insert'(nombre) {
    check(nombre, String);

    return Productos.insert({
      nombre,
      createdAt: new Date(),
    });
  },
  'productos.add'(form) {
    check(form.nombre, String);
    // console.log(from);
    const nombre = form.nombre;
    return Productos.insert({
      nombre,
      createdAt: new Date(),
    });
  },
});
