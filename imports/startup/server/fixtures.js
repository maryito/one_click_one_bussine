// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Productos } from '../../api/productos/productos.js';

Meteor.startup(() => {

  // Realizamos un carga inicial de datos a la colection de productos
  // if( Productos.find().count() === 0 ){
  //   data = [
  //     { nombre: "computadora" },
  //     { nombre: "Servidores" },
  //     { nombre: "Camaras" },
  //     { nombre: "Impresoras" }
  //   ]
  //   // Agregamos a la base de datos
  //   data.forEach( producto => Productos.insert(producto))
  // }
});
