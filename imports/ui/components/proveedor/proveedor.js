import { Proveedores } from '/imports/api/productos/productos.js';
import { conexiones as conx } from '/imports/api/productos/conexiones.js';
import { Template } from 'meteor/templating';
import './proveedor.html';

Template.proveedor.onCreated(function () {
  // Subscricion a productos del proveedor
  // conexiones.prov.subscribe('proveedor.productos');
  // console.log(conexiones.prov.status().status);
  conx.prov.subscribe('proveedor.productos');
  console.log(conx.prov.status().status);
});

Template.proveedor.helpers({
  productos() {
    return Proveedores.find({});
  },
});
