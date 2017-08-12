import { Compras } from '/imports/api/compras/compras.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './ordenes.html';
import { dataTable } from 'meteor/twbs:bootstrap';

Template.ordenes.onCreated(function () {
  // Subscricion a productos
  Meteor.subscribe('compras');
});

Template.ordenes.helpers({
  ListdoOrdenes() {
    return Compras.find({});
  },
});

Template.ordenes.Onrendered = function () {
    $('.tb-orden').dataTable(
      {
        responsive: true,
        lengthMenu:	[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]]
      }
    );
};

