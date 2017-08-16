import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const EmpresaProduc = new SimpleSchema({
  id: {
    label: 'ID',
    type: String,
    max: 5,
  },

  nomb_prod: {
    label: 'nombre',
    type: String,
    max: 50,
  },

  marca: {
    type: String,
    autoform: {
      options: [
                { label: 'Dell', value: 'dell' },
                { label: 'HP', value: 'hp' },
                { label: 'ASUS', value: 'asus' },
                { label: 'Lenovo', value: 'lenovo' },
                { label: 'otro', value: 'otro' },
      ],
    },
  },


  descripcion: {
    label: 'Descripcion',
    type: String,
    max: 200,
  },

  prec_prod: {
    label: 'Precio Producto',
    type: String,
    max: 30,
  },
  provedor: {
    label: 'Nombre del Provedor',
    type: String,
    max: 50,
  },

  categoria: {
    label: 'Categoria del Producto',
    type: String,
    max: 50,
  },

});
