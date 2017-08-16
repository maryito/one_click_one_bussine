// Methods related to inventario

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Inventario } from './inventario.js';
import { Productos } from '/imports/api/productos/productos.js';

Meteor.methods({
  'inventario.agregar'(prod) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(403, "Acceso Denegado");
    }
    if (prod.proveedorId !== Meteor.userId()) {
      throw new Meteor.Error(445, "No no no");
    }
    check(prod, {
      id: String,
      categoria: String,
      nombreId: String,
      cantidad: Number,
      precio_unit: Number,
      stock: Number,
      descripcion: String,
      proveedor: String,
      proveedorId: String,
    });
    const nom = Productos.findOne(prod.nombreId).nombre;
    console.log(nom);
    console.log(prod);
    _.extend(prod, {
      creado: new Date(),
      nombre: nom
    });
    return Inventario.insert(prod);
  },
  'inventario.eliminar'(id) {
    check(id, String);
    return Inventario.remove(id);
  },
  'inventario.actualizar'(prod) {
    console.log(prod);
    check(prod, {
      id: String,
      categoria: String,
      nombreId: String,
      nombre: String,
      cantidad: Number,
      precio_unit: Number,
      stock: Number,
      descripcion: String,
      proveedor: String,
      proveedorId: String,
    });
    const nom = Productos.findOne(prod.nombreId).nombre;
    _.extend(prod, {
      actualizado: new Date(),
      nombre: nom
    });
    return Inventario.update({ "id": prod.id }, { $set: prod });
  },
});
