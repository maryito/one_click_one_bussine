import { Productos } from '/imports/api/productos/productos.js';
import { ProdSchemas } from '/imports/api/productos/schemas.js';
import { Meteor } from 'meteor/meteor';
import './proveedor.html';

Template.proveedor.onCreated(function () {
  Meteor.subscribe('productos.all');
});

Template.proveedor.helpers({
  productos() {
    return Productos.find({});
  },
  Schemas() {
    return ProdSchemas;
  }
});

Template.proveedor.events({
  'submit .proveedor-producto-add'(event) {
    event.preventDefault();
    console.log("evento");
    const target = event.target;
    const nombre = target.nombre;

    Meteor.call('productos.insert', nombre.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        alert("agregado");
        nombre.value = '';
      }
    });
  },
});
