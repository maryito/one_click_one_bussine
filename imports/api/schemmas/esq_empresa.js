import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const EmpresaSchema = new SimpleSchema({
  id: {
    label: 'ID',
    type: String,
    max: 5,
  },

  nombre: {
    label: 'Nombre de la empresa',
    type: String,
    max: 10,
  },
  sitio_web: {
    label: 'Direccion web ',
    type: String,
    max: 10,
  },

  fund_empresa: {
    label: 'Antiguedad',
    type: String,
    max: 50,
  },

  Descrip_Empresa: {
    label: 'Descripcion de la Empresa ',
    type: String,
    max: 500,
  },


  correo: {
    label: 'E-mail',
    type: String,
    max: 10,
  },

  telefono: {
    label: 'Telefono',
    type: String,
    max: 10,
  },

  Direccion: {
    label: 'Direccion',
    type: String,
    max: 10,
  },

  localidad: {
    label: 'Localidad',
    type: String,
    max: 10,
  },

  provincia: {
    type: String,
    autoform: {
      options: [
                { label: 'Bocas del toro', value: 'bocas del toro' },
                { label: 'cocle ', value: 'cocle' },
                { label: 'colon', value: 'colon' },
                { label: 'chiriqui', value: 'chiriqui' },
                { label: 'Darien', value: 'Darien' },
                { label: 'Herrera', value: 'Herrera' },
                { label: 'Santos', value: 'Santos' },
                { label: 'Panama', value: 'Panama' },
                { label: 'veraguas', value: 'veraguas' },
                { label: 'Panama oeste', value: 'Panama oeste' },
                { label: 'Exterior', value: 'otro' },
      ],
    },
  },


})
;
