// Definition of the productos collection

import { Mongo } from 'meteor/mongo';

// base de datos local
export const Productos = new Mongo.Collection('productos');

if (Meteor.isServer) {
    // creacion de indexes
    Productos._ensureIndex({ nombre: 1, precio: 1, tiempo: 1 });
}
import { FilesCollection } from 'meteor/ostrio:files';

const Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});

if (Meteor.isClient) {
  Meteor.subscribe('files.images.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });
}

export default Images; // To be imported in other files