// All productos-related publications

import { Meteor } from 'meteor/meteor';
import { Compras } from '../compras.js';

Meteor.publish('compras', function compras() {
  return Compras.find();
});