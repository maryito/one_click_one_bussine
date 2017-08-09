import { Productos } from '/imports/api/productos/productos.js';
import { ProdSchemas } from '/imports/api/productos/schemas.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './producto.html';

// buscarRecomendado = (datos) => {
//   let tiempo = 0;
//   datos.forEach( data => (
//     i = data.tiempo; 
//     if(i < tiempo){
//       tiempo =  data.tiempo
//     }
//   ))
// }
Template.producto.onCreated(function () {
  // Subscricion a productos del producto
  Meteor.subscribe('productos');
  Session.set('producto', '');
  Session.set('recomendacion', { tiempo: 0, precio: 0 });
});

Template.producto.helpers({
  Schemas() {
    return ProdSchemas;
  },
  productos() {
    data = Session.get('producto');
    if (data) {
      // console.log(data);
      cant = Number(data.cantidad)
      productos = Productos.find({ 'producto.nombre': data.nombre, 'producto.cantidad': { $gt: cant } });
      let tiempo = Session.get('recomendacion').tiempo;
      let precio = Session.get('recomendacion').precio;

      datos = { precios: [], tiempos:[]};

      productos.forEach((i) => {
        tim = i.producto.tiempo;
        prec = i.producto.precio;
        
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
      return Productos.find({});
    }
  },
  recomendado() {
    return Session.get('producto');
  }
});

Template.producto.events({
  'submit .form-producto'(events) {
    events.preventDefault();
    data = {};
    data.nombre = events.target.producto.value;
    data.cantidad = events.target.cantidad.value;


    Session.set('producto', data)
    console.log("Buscando", data);
  }
})