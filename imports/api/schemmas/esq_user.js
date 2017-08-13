import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const UserSchema = new SimpleSchema({

    usuario: {
    label: '',
    type: String,
    min: 1,
  },



})

