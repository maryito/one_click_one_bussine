// All productos-related publications

import { Meteor } from 'meteor/meteor';
import { Inventario } from '../inventario.js';

Meteor.publish('inventario', function inventario() {
  const empresaId = Meteor.userId();
  const nombre = Meteor.user().profile.name;

  console.log("empresa a la que se va afiliar id: " + empresaId + " nombre " + nombre);
  if (nombre === "admin") {
    return Inventario.find({}, { sort: { id: 1 } });

  } else {
    // return Inventario.find({ proveedor: empresaId });
    return Inventario.find();

  }
  // return Inventario.find();
});
Meteor.publish('inventario.portal', function inventario(buscar) {
  console.log(" estableciendo la conexion " + buscar);
  // check(buscar, Match.OneOf(String, null, undefined));

  let consulta = {};
  let projection = { limit: 10, sort: { categoria: 1 } };

  if (buscar) {
    let analizador = new RegExp(buscar, 'i');

    consulta = {
      $or: [
        { nombre: analizador },
        { categoria: analizador },
        { proveedor: analizador },
        { precio_unit: analizador },
      ],
    };
    projection.limit = 100;
  }
  return Inventario.find(consulta, projection);
});