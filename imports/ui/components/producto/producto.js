import { Productos } from '/imports/api/productos/productos.js';
import { ProdSchemas } from '/imports/api/productos/schemas.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './producto.html';

Template.producto.onCreated(function () {
  // Subscricion a productos del producto
  Meteor.subscribe('productos');
  Session.set('info', '');
});

Template.producto.helpers({
  Schemas() {
    return ProdSchemas;
  },
  productos() {
    return Productos.find({});
  },
  ProductoInfo() {
    return Session.get('info');
  },
});

Template.producto.events({
  'click #editar'(events) {
    events.preventDefault();
    Session.set('info', this);
    alert("* Proximante actualizacion.");
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
