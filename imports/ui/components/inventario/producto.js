import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Productos } from '/imports/api/productos/productos.js';
import { Computadora, Impresora, Software } from '/imports/api/schemmas/esq_producto.js';

import './producto.html';
Template.producto.onCreated(function () {
  // Subscricion a productos del producto
  Meteor.subscribe('productos');
  Session.set('info', '');
  Session.set('categoria', '');
});

Template.producto.helpers({
  Schemas() {
    return Computadora;
  },

  Schemas1() {
    return Impresora;
  },

  Schemas2() {
    return Software;
  },

  productos() {
    const data = Productos.find({ categoria: "computadora" });
    return data;
  },
  productosImp() {
    const dataImp = Productos.find({ categoria: "impresora" });
    return dataImp;
  },
  productosSoft() {
    const dataSof = Productos.find({ categoria: "software" });
    return dataSof;
  },
  ProductoInfo() {
    return Session.get('info');
  },
});

Template.producto.events({
  'click #editar'(events) {
    events.preventDefault();
    Session.set('info', this);
    alert('* Proximante actualizacion.');
  },
  'click #eliminar'(events) {
    events.preventDefault();
    const resp = confirm(`Seguro que desea eliminar el producto: ${this.nombre}`);
    if (resp) {
      Meteor.call('productos.eliminar', this._id, function(error) {
        if (error) {
          console.log('error', error);
        }
      });
    }
  },
});
Template.producto.rendered = function () {
  $('.tb-producto').dataTable(
    {
      responsive: true,
      lengthMenu:	[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, 'Todos']],
    },
    );
};
