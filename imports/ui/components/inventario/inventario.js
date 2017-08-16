import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';


import moment from 'moment';

import { Inventario } from '/imports/api/inventario/inventario.js';
import { InventarioSchema } from '/imports/api/schemmas/esq_inventario.js';
import { Productos } from '/imports/api/productos/productos.js';

import './producto.js';
import './inventario.html';

Template.inventario.onCreated(function () {
  // Subscricion a inventario del producto
  Tracker.autorun(() => {
    Meteor.subscribe('inventario');
    Meteor.subscribe('productos');
  });
  if (Meteor.userId()) {

    Session.set('info', '');
    Session.set('nuevo', '');
  } else {
    console.log("Debe iniciar sesion");
  }
});

Template.inventario.helpers({
  Schemas() {
    return InventarioSchema;
  },
  productos() {
    return Inventario.find({});
  },
  ProductoInfo() {
    return Session.get('info');
  },
  MostrarModal() {
    return Session.get('nuevo');
  }
});

Template.inventario.events({
  'click .inv-nuevo'(events) {
    events.preventDefault();
    Session.set('nuevo', true);
  },
  'click .inv-editar'(events) {
    events.preventDefault();
    Session.set('info', this);
  },
  'click #eliminar'(events) {
    events.preventDefault();
    const resp = confirm(`Seguro que desea eliminar el producto: ${this.nombre}`);
    if (resp) {
      Meteor.call('inventario.eliminar', this._id, function (error) {
        if (error) {
          console.log('error', error);
        }
      });
    }
  },
});



AutoForm.hooks({
  "InventarioActualizar": {
    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
      if (result) {
        $('#ActualizarProducto').modal('hide');
        Session.set('info', '');
        return false;
      }
    },

    // Called when any submit operation fails
    onError: function (formType, error) {
      console.log(error);
    },
  },

  "InventarioAgregar": {
    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
      if (result) {
        console.log("cerrando");
        $('#AgregarProducto').modal('hide');
        Session.set('nuevo', '');
        return false;
      }
    },

    // Called when any submit operation fails
    onError: function (formType, error) {
      console.log(error);
    },  // Called when any submit operation succeeds
  },
});
