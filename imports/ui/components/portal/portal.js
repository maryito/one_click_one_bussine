import { Productos } from '/imports/api/productos/productos.js';
import { Proveedores } from '/imports/api/productos/productos.js';
import { conexion } from '/imports/api/productos/conexiones.js';
import { ProdSchemas } from '/imports/api/productos/schemas.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './portal.html';

Template.portal.onCreated(function () {
  // Subscricion a productos del producto
  conexion.subscribe('productos');
  console.log(conexion.status().status);
  Session.set('portal', '');
  Session.set('recomendacion', { tiempo: 0, precio: 0 });
});

Template.portal.helpers({
  Schemas() {
    return ProdSchemas;
  },
  productos() {
    data = Session.get('portal');
    if (data) {
      console.log(data);
      cant = Number(data.cantidad)
      productos = Proveedores.find({ 'nombre': data.nombre, 'cantidad': { $gt: cant } });
      let tiempo = Session.get('recomendacion').tiempo;
      let precio = Session.get('recomendacion').precio;

      datos = { precios: [], tiempos:[]};

      productos.forEach((i) => {
        tim = i.tiempo;
        prec = i.precio;
        
        datos.precios.push(prec);
        datos.tiempos.push(tim);
      })
      console.log(datos);

      prec = Math.min.apply(Math, datos.precios);
      timp = Math.min.apply(Math, datos.tiempos);
      console.log(prec, timp);

      index =  datos.tiempos.indexOf(Number(timp))
      index2 =  datos.precios.indexOf(Number(prec))
      if ( index === index2) {
        console.log(" recomendar proveedor");
      }else {
        alert("Ups! seleccion la preferencia")
      }
      // console.log("Posicion", posision, posision2);
      // Logica si la recomendacion es del mismo proveedor recomendar. Sino mensaje de alertas


      return productos
      // return Productos.find({ 'producto.nombre': data.nombre, 'producto.cantidad': { $gt: data.cantidad} });
    } else {
      return Proveedores.find({});
    }
  },
  recomendado() {
    return Session.get('portal');
  }
});

Template.portal.events({
  'click .form-producto'(events, template) {
    events.preventDefault();
    console.log("evento");
    data = {};
    data.nombre = template.find("#nombre_buscar").value;
    // data.cantidad = events.target.cantidad.value;


    Session.set('portal', data)
    console.log("Buscando", data);
  }
})