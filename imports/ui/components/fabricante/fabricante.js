import { Fabricantes } from '/imports/api/productos/productos.js';
import { conexiones as conx } from '/imports/api/productos/conexiones.js';
import { Template } from 'meteor/templating';
import './fabricante.html';

Template.fabricante.onCreated(function () {
  // Subscricion a productos del fabricante
  // conexiones.fab.subscribe('fabricante.productos');
  // console.log(conexiones.fab.status().status);
  // conx.fab.subscribe('fabricante.productos');
  // console.log(conx.fab.status().status);
});

Template.fabricante.helpers({
  productos() {
    return Fabricantes.find({});
  },
});
