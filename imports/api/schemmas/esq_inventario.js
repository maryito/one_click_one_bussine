import SimpleSchema from 'simpl-schema';
import { Productos } from '/imports/api/productos/productos.js';

SimpleSchema.extendOptions(['autoform']);

export const InventarioSchema = new SimpleSchema({

  id: {
    label: 'Código de referencia',
    type: String,
  },

  categoria: {
    type: String,
    autoform: {
      options: [
        { label: 'Computadora', value: 'computadora' },
        { label: 'Impresora', value: 'impresora' },
        { label: 'Software', value: 'software' },
        { label: 'Otro', value: 'otro' },
      ],
    },
  },

  nombre: {
    label: 'Nombre del producto',
    type: String,
    autoform: {
      afFieldInput: {
        firstOption: 'Seleccione el producto',
      },
      // options: () => Producto.find({ proveedor: "nombre del proveedor" }).map((obc) => (
      options: () => Productos.find().map((obc) => (
        { label: "Nombre: " + obc.nombre + " código: " + obc._id, value: '' + obc._id }))
    },
  },

  cantidad: {
    label: 'Cantidad de productos',
    type: Number,
    min: 1,
  },

  precio_unit: {
    label: 'Precio Unitario',
    type: Number,
    min: 0,
  },

  stock: {
    label: 'Cantidad en stock',
    type: Number,
    min: 1,
  },
  descripcion: {
    label: 'Detalle del Producto',
    type: String,
    min: 1,
  },
  proveedor: {
    label: 'Proveedor',
    type: String,
    defaultValue: () => {
      if (Meteor.isClient) {
        return Meteor.userId();
      } else {
        return this._id;
      }
    },
    autoform: { readonly: true },
  },

});

