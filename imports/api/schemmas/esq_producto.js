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


Computadora = new SimpleSchema ({

  id: {
    label: 'ID',
    type: String,
    max: 5,
  },

  modelo: {
    label: 'Modelo de Computadora',
    type: String,
    min :1,
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
})

Impresora = new SimpleSchema ({
  id: {
    label: 'ID',
    type: String,
    max: 5,
  },
    marca : {
    label: 'Marca de la Computadora',
    type: String,
    max: 30,
  },
  funcionalidad: {
    type: String,
    autoform: {
      options: [
                { label: 'Multifuncional', value: 0 },
                { label: 'Solo Fax ', value:  1 },
                { label: 'Solo Escaner', value: 2 },
                { label: 'Fotocopiadora', value: 3 },
                { label: 'otro', value: 4 },
      ],
    },
  },
  Conectividad: {
    type: String,
    autoform: {
      options: [
                { label: 'Red', value: 0 },
                { label: 'Usb ', value:  1 },
                { label: 'otro', value: 2 },
      ],
    },
  },
  tipo_impre: {
    type: String,
    autoform: {
      options: [
                { label: 'Laser', value: 0 },
                { label: 'Recargable por Tinta ', value:  1 },
                { label: 'otro', value: 2 },
      ],
    },
  },
})

Software = new SimpleSchema ({
  
  office_enterprise: {
    type: String,
    autoform: {
      options: [
                { label: 'Standar', value: 0 },
                { label: 'Plus', value:  1 },
                { label: 'Premium', value: 2 },
                { label: 'otro', value: 3 },
      ],
    },
  },
  Antivirus: {
    type: String,
    autoform: {
      options: [
                { label: 'Bitdefender', value: 0 },
                { label: 'Kaspersky', value:  1 },
                { label: 'McAfee', value: 2 },
                { label: 'Norton', value: 3 },
                { label: 'Eset Nod32', value: 4 },
                { label: 'otro', value: 5 },
      ],
    },
  },


  
})