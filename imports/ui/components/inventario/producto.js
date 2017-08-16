import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Productos, Images } from '/imports/api/productos/productos.js';
import { Computadora, Impresora, Software } from '/imports/api/schemmas/esq_producto.js';

import './producto.html';
Template.producto.onCreated(function () {
  // Subscricion a productos del producto
  Meteor.subscribe('productos');
  Meteor.subscribe('files.images.all');  
  Session.set('info', '');
  Session.set('categoria', '');
});

Template.producto.helpers({
  Schemas() {
    return Computadora;
  },

  Schemas1() {
    return Impresora;
  },

  Schemas2() {
    return Software;
  },

  productos() {
    const data = Productos.find({ categoria: "computadora" });
    return data;
  },
  productosImp() {
    const dataImp = Productos.find({ categoria: "impresora" });
    return dataImp;
  },
  productosSoft() {
    const dataSof = Productos.find({ categoria: "software" });
    return dataSof;
  },
  ProductoInfo() {
    return Session.get('info');
  },
});

Template.producto.events({
  'click #editar'(events) {
    events.preventDefault();
    Session.set('info', this);
    alert('* Proximante actualizacion.');
  },
  'click #eliminar'(events) {
    events.preventDefault();
    const resp = confirm(`Seguro que desea eliminar el producto: ${this.nombre}`);
    if (resp) {
      Meteor.call('productos.eliminar', this._id, function(error) {
        if (error) {
          console.log('error', error);
        }
      });
    }
  },
});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload() {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
      if (e.currentTarget.files && e.currentTarget.files[0]) {
        // We upload only one file, in case
        // multiple files were selected
        var upload = Images.insert({
          file: e.currentTarget.files[0],
          streams: 'dynamic',
          chunkSize: 'dynamic',
          meta: {
             reporteId: Session.get('imagenForm')
          }
        }, false);

        upload.on('start', function () {
          template.currentUpload.set(this);
        });

        upload.on('end', function (error, fileObj) {
          if (error) {
            alert('Error al Cargar la Imagen: ' + error);
          } else {
            contadorFoto += 1;
            alert('Foto '+" nombre "+ fileObj.name +" Subida con Éxito");

          }
          template.currentUpload.set(false);
        });

        upload.start();
      }
    }
});