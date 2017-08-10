import { Compras } from '/imports/api/compras/compras.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './ordenesCompras.html';
// import { dataTable } from 'meteor/twbs:bootstrap';

Template.ordenesCompras.onCreated(function () {
  // Subscricion a productos del Proveedor
  Meteor.subscribe('compras');
});

Template.ordenesCompras.helpers({
  ordenes() {
    return Compras.find({});
  },
});

Template.ordenesCompras.rendered = function () {
    $('.tb-orden').dataTable(
      {
        responsive: true,
        lengthMenu:	[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]]
      }
    );
};

