import { Compras } from '/imports/api/compras/compras.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './ordenesCompras.html';

Template.ordenesCompras.onCreated(function () {
  // Subscricion a productos del Proveedor
  Meteor.subscribe('compras');
});

Template.ordenesCompras.helpers({
  ordenes() {
    return Compras.find({});
  },
});
