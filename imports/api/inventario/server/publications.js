// All productos-related publications

import { Meteor } from 'meteor/meteor';
import { Inventario } from '../inventario.js';

Meteor.publish('inventario', function inventario() {
  return Inventario.find();
});
