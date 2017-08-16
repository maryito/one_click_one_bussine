import SimpleSchema from 'simpl-schema';
import { Productos } from '/imports/api/productos/productos.js';
import { Random } from 'meteor/random'
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

  nombreId: {
    label: 'Nombre del producto',
    type: String,
    autoform: {
      afFieldInput: {
        firstOption: 'Seleccione el producto',
      },
      // options: () => Producto.find({ proveedor: "nombre del proveedor" }).map((obc) => (
      options: () => Productos.find({ proveedor: Meteor.userId() }).map((obc) => (
        // options: () => Productos.find().map((obc) => (
        { label: " " + obc.nombre, value: '' + obc._id }))
    },
  },
  nombre: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "hidden"
      },
      afFormGroup: {
        label: false
      }
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
      if (Meteor.isClient && Meteor.user()) {
        return Meteor.user().profile.name;
      }
    },
    autoform: {
      afFieldInput: {
        type: "hidden"
      },
      afFormGroup: {
        label: false
      }
    },
  },
  proveedorId: {
    type: SimpleSchema.RegEx.Id,
    defaultValue: Meteor.userId(),
    autoform: {
      afFieldInput: {
        type: "hidden"
      },
      afFormGroup: {
        label: false
      }
    }
    // autoform: { readonly: true },
  },

});
