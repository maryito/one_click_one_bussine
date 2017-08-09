// Methods related to productos

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Compras } from './compras.js';
import { ProdSchemas } from './schemas.js';

Meteor.methods({
  'compras.insert'(nombre) {
    check(nombre, String);

    return Compras.insert({
      nombre,
      createdAt: new Date(),
    });
  },
  'compras.add'(form) {
    const data = form;
    console.log(form);
    // ProdSchemas.addValidator(form);
    check(data, ProdSchemas);
    // check(form.nombre, String);
    // console.log(from);
    const nombre = form.nombre;
    return Compras.insert({
      nombre,
      createdAt: new Date(),
    });
  },
});
