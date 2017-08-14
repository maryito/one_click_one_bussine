// Methods related to inventario

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Inventario } from './inventario.js';

Meteor.methods({
  'inventario.agregar'(prod) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(403, "Acceso Denegado");
    }
    if (prod.proveedor !== Meteor.userId()) {
      throw new Meteor.Error(445, "No no no");
    }
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
    _.extend(prod, {
      creado: new Date(),
    });

    const estado = Inventario.insert(prod);
    return estado;
  },
  'inventario.eliminar'(id) {
    check(id, String);
    return Inventario.remove(id);
  },
  'inventario.actualizar'(prod) {
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
    _.extend(prod, {
      actualizado: new Date(),
    });
    return Inventario.update({ "id": prod.id }, { $set: prod });
  },
});
