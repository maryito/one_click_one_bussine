// All productos-related publications

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Productos, Images } from '../productos.js';

Meteor.publish('productos', function productos() {
  return Productos.find();
});

Meteor.publish('producto.portal', function productos(id) {
  console.log(id);
  check(id, String);
  console.log(Productos.findOne({ _id: id }));
  return Productos.find(id);
});