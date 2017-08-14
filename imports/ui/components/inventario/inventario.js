import { Inventario } from '/imports/api/inventario/inventario.js';
import { InventarioSchema } from '/imports/api/schemmas/esq_inventario.js';
import { Productos } from '/imports/api/productos/productos.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './producto.js';
import './inventario.html';

Template.inventario.onCreated(function () {
  // Subscricion a inventario del producto
  if (Meteor.userId()) {
    Meteor.subscribe('inventario');
    Meteor.subscribe('productos');
    Session.set('info', '');
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
  NombreProducto(id) {
    nombre = Productos.findOne({ '_id': id }).nombre;
    return nombre;
  }
});

Template.inventario.events({
  'click #editar'(events) {
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
Template.inventario.rendered = function () {
  $('.tb-inventario').dataTable(
    {
      responsive: true,
      lengthMenu: [[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]]
    }
  );
};

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
        $('#AgregarProducto').modal('hide');
        return false;
      }
    },

    // Called when any submit operation fails
    onError: function (formType, error) { },  // Called when any submit operation succeeds
  },
});

