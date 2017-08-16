import { Productos } from '/imports/api/productos/productos.js';
import { ProdSchemas } from '/imports/api/productos/schemas.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './demo.html';

Template.demo.onCreated(function () {
  Meteor.subscribe('productos.all');
});

Template.demo.helpers({
  productos() {
    return Productos.find({});
  },
  Schemas() {
    return ProdSchemas;
  },
});

Template.demo.events({
  'submit .local-producto-add'(event) {
    event.preventDefault();
    console.log('evento');
    const target = event.target;
    const nombre = target.nombre;

    Meteor.call('productos.insert', nombre.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        alert('agregado');
        nombre.value = '';
      }
    });
  },
});
