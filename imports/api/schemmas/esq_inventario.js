import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const InventarioSchema = new SimpleSchema({

  id: {
    label: 'ID',
    type: String,
  },

  nombre: {
    label: 'Nombre del producto',
    type: String,
    max: 30,
  },

  cantidad: {
    label: 'Cantidad de productos',
    type: Number,
    min: 1,
  },

  precio_unit: {
    label: 'Precio Unitario',
    type: Number,
    min: 1,
  },
  descripcion: {
    label: 'Detalle del Producto',
    type: String,
    min: 1,
  },

  Categoria: {
    type: String,
    autoform: {
      options: [
                { label: 'Computadora', value: '0' },
                { label: 'Impresora', value: '1' },
                { label: 'software', value: '2' },
                { label: '4', value: 'otro' },
      ],
    },
  },
});
