// Methods related to productos

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Productos } from './productos.js';

Meteor.methods({
  'productos.insert'(nombre) {
    check(nombre, String);

    return Productos.insert({
      nombre,
      createdAt: new Date(),
    });
  },
});
