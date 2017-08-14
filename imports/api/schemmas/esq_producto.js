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


export const Computadora = new SimpleSchema({

  categoria: {
    label: 'Categoria',
    type: String,
    defaultValue: 'computadora',
    autoform: { readonly: true },
  },

  id: {
    label: 'ID',
    type: String,
    max: 5,
  },
  nombre: {
    type: String,
    max: 30,
  },

  modelo: {
    label: 'Modelo de Computadora',
    type: String,
    min: 1,
    max: 30,
  },
  procesador: {
    label: 'Procesador de la Computadora',
    type: String,
    max: 30,
  },
  sis_operat: {
    label: 'Sistema Operativo',
    type: String,
    max: 30,
  },
  memoria: {
    label: 'Memoria Ram',
    type: Number,
    max: 30,
  },
  disco_duro: {
    label: 'Disco Duro',
    type: String,
    max: 5,
  },
  t_Pantalla: {
    label: 'Dimension de Pantalla',
    type: String,
    max: 10,
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

export const Impresora = new SimpleSchema({

  categoria: {
    label: 'Categoria',
    type: String,
    defaultValue: 'impresora',
    autoform: { readonly: true },
  },
  id: {
    label: 'ID',
    type: String,
    max: 5,
  },
  nombre: {
    type: String,
    max: 30,
  },
  marca: {
    label: 'Marca de la Impresora',
    type: String,
    max: 30,
  },

  funcionalidad: {
    type: String,
    autoform: {
      options: [
        { label: 'Multifuncional', value: 'multifuncional' },
        { label: 'Solo Fax ', value: 'solofax' },
        { label: 'Solo Escaner', value: 'soloescaner' },
        { label: 'Fotocopiadora', value: 'fotocopiadora' },
        { label: 'otro', value: 'otro' },
      ],
    },
  },
  conectividad: {
    type: String,
    autoform: {
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Usb ', value: 'usb' },
        { label: 'otro', value: 'otro' },
      ],
    },
  },
  tipo_impresion: {
    type: String,
    autoform: {
      options: [
        { label: 'Laser', value: 'laser' },
        { label: 'Recargable por Tinta ', value: 'recargabletinta' },
        { label: 'otro', value: 'otro' },
      ],
    },
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

export const Software = new SimpleSchema({

  categoria: {
    label: 'Categoria',
    type: String,
    defaultValue: 'software',
    autoform: { readonly: true },
  },

  lincencia: {
    type: String,
    autoform: {
      options: [
        { label: 'Standar', value: 'standar' },
        { label: 'Plus', value: 'plus' },
        { label: 'Premium', value: 'premium' },
        { label: 'otro', value: 'otro' },
      ],
    },
  },
  nombre: {
    type: String,
    autoform: {
      options: [
        { label: 'Bitdefender', value: 'bitdefender' },
        { label: 'Kaspersky', value: 'kaspersky' },
        { label: 'McAfee', value: 'mcafree' },
        { label: 'Norton', value: 'norton' },
        { label: 'Eset Nod32', value: 'esetnod32' },
        { label: 'otro', value: 'otro' },
      ],
    },
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
