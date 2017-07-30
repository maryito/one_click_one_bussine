// All productos-related publications

import { Meteor } from 'meteor/meteor';
import { Productos } from '../productos.js';

Meteor.publish('productos.all', function () {
  return Productos.find();
});
