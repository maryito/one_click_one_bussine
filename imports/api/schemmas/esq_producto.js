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
  },

  id: {
    label: 'ID',
    type: String,
    max: 5,
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
  Memory: {
    label: 'Memoria Ram',
    type: Number,
    max: 30,
  },
  Disco_duro: {
    label: 'Disco Duro',
    type: Number,
    max: 5,
  },
  T_Pantalla: {
    label: 'Dimension de Pantalla',
    type: Number,
    max: 5,
  },
});

export const Impresora = new SimpleSchema({

  categoria: {
    label: 'Categoria',
    type: String,
    defaultValue: 'impresora',
  },
  id: {
    label: 'ID',
    type: String,
    max: 5,
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
  Conectividad: {
    type: String,
    autoform: {
      options: [
                { label: 'Red', value: 'red' },
                { label: 'Usb ', value: 'usb' },
                { label: 'otro', value: 'otro' },
      ],
    },
  },
  tipo_impre: {
    type: String,
    autoform: {
      options: [
                { label: 'Laser', value: 'laser' },
                { label: 'Recargable por Tinta ', value: 'recargabletinta' },
                { label: 'otro', value: 'otro' },
      ],
    },
  },
});

export const Software = new SimpleSchema({

  categoria: {
    label: 'Categoria',
    type: String,
    defaultValue: 'software',
  },

  office_enterprise: {
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
  Antivirus: {
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


});
