// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Productos } from '../../api/productos/productos.js';

Meteor.startup(() => {

  // Realizamos un carga inicial de datos a la colection de productos
  if (Productos.find().count() === 0) {
    const data = [
      {
        nombre: 'Computadora',
        cantidad: 100,
        precio: 250,
        proveedor: 'pv1',
        marca: 'dell',
        tiempo: 2,
        createdAt: new Date(),
      },
      {
        nombre: 'Computadora',
        cantidad: 5000,
        precio: 150,
        proveedor: 'pv2',
        marca: 'dell',
        tiempo: 4,
      },
      {
        nombre: 'Computadora',
        cantidad: 1500,
        precio: 90,
        proveedor: 'pv3',
        marca: 'dell',
        tiempo: 1,
      },
    ];
    // Agregamos a la base de datos
    data.forEach(producto => Productos.insert(producto));
  }
});
