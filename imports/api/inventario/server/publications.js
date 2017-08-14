// All productos-related publications

import { Meteor } from 'meteor/meteor';
import { Inventario } from '../inventario.js';

Meteor.publish('inventario', function inventario() {
  const empresaId = Meteor.userId();
  const nombre = Meteor.user().profile.name;

  console.log("empresa a la que se va afiliar id: " + empresaId + " nombre "+ nombre);
  return Inventario.find({ proveedor: empresaId });
  // return Inventario.find();
});
