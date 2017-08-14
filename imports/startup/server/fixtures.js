// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Productos } from '../../api/productos/productos.js';
import { Inventario } from '../../api/inventario/inventario.js';

Meteor.startup(() => {

  // Realizamos un carga inicial de datos a la colection de productos
  // Creacion de usuarios
  if (Meteor.users.find().count() === 0) {
    const usu = {
      "_id": "dcbmhABnMkLxsASNb",
      "createdAt": new Date(),
      "services": {
        "password": {
          "bcrypt": "$2a$10$nRre9TqtrgeeOf9dy17GpuujtRkMYPrxaJshXl6fS.eZQ8D.kj0iC"
        },
      },
      "username": "admin",
      "emails": [
        {
          "address": "admin@admin.com",
          "verified": false
        }
      ],
      "profile": {
        "name": "admin"
      }
    };

    Meteor.users.insert(usu)
    // Accounts.createUser({
    //   username: "admin",
    //   email: "admin@admin.com",
    //   password: "admin",
    //   profile: {
    //     name: "admin",
    //   }
    // })
  }
  //Creacion de productos
  if (Productos.find().count() === 0) {
    const data = [
      {
        "_id": "4K7YNtci94QZYtdNB",
        "categoria": "computadora",
        "id": "001",
        "nombre": "Computadora oficina",
        "modelo": "1",
        "procesador": "intel I9",
        "sis_operat": "linux",
        "memoria": 4,
        "disco_duro": "500",
        "t_Pantalla": "1025x800",
        "proveedor": "dcbmhABnMkLxsASNb",
        "creado": new Date(),
      },
      {
        "_id": "QvFnCBsQNqcfAGnRD",
        "categoria": "impresora",
        "id": "100",
        "nombre": "Impresora oficina",
        "marca": "cannon",
        "funcionalidad": "multifuncional",
        "conectividad": "red",
        "tipo_impresion": "recargabletinta",
        "proveedor": "dcbmhABnMkLxsASNb",
        "creado":  new Date(),
      },
      {
        "_id": "aiTeGLMjRbTQaL9yq",
        "categoria": "software",
        "lincencia": "standar",
        "nombre": "bitdefender",
        "proveedor": "dcbmhABnMkLxsASNb",
        "creado":  new Date(),
      }
    ]
    // Agregamos a la base de datos
    data.forEach(producto => Productos.insert(producto));
  }
  // Creacion de inventario
  if (Inventario.find().count() === 0) {
    const data = [
      {
        "_id": "wqEjQW6ZFmgjhfEjS",
        "id": "900",
        "categoria": "computadora",
        "nombre": "4K7YNtci94QZYtdNB",
        "cantidad": 100,
        "precio_unit": 500,
        "stock": 5,
        "descripcion": "Computadora de oficina",
        "proveedor": "dcbmhABnMkLxsASNb",
        "creado":  new Date(),
      },
      {
        "_id": "MRZtTLFWMwx3uHnHs",
        "id": "901",
        "categoria": "impresora",
        "nombre": "QvFnCBsQNqcfAGnRD",
        "cantidad": 90,
        "precio_unit": 75,
        "stock": 5,
        "descripcion": "Impresora  economica",
        "proveedor": "dcbmhABnMkLxsASNb",
        "creado":  new Date(),
      },
      {
        "_id": "a5ntyHRwfonGWKFMy",
        "id": "902",
        "categoria": "software",
        "nombre": "aiTeGLMjRbTQaL9yq",
        "cantidad": 10,
        "precio_unit": 90,
        "stock": 10,
        "descripcion": "Proteccion a maximo nivel",
        "proveedor": "dcbmhABnMkLxsASNb",
        "creado":  new Date(),
      }
    ];
    // Agregamos a la base de datos
    data.forEach(inventario => Inventario.insert(inventario));
  }

});
