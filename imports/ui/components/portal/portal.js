import { Inventario } from '/imports/api/productos/productos.js';
import { conexion } from '/imports/api/productos/conexiones.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './portal.html';

Template.portal.onCreated(function () {
  // Subscricion a productos del producto
  // conexion.subscribe('productos');
  // conexion.subscribe('inventario.portal');
  // console.log(conexion.status().status);
  // Session.set('habilitar', false);
  // Session.set('portal', '');
  // Session.set('recomendacion', { tiempo: 0, precio: 0 });
  // con meteor chet
  let template = Template.instance();

  template.busarConsulta = new ReactiveVar();
  template.buscando = new ReactiveVar(false);
  template.filtros = new ReactiveVar();

  template.autorun(() => {
    conexion.subscribe('inventario.portal', template.busarConsulta.get(), () => {
      setTimeout(() => {
        template.buscando.set(false);
      }, 300);
    })
  })
});

Template.portal.helpers({
  buscando() {
    return Template.instance().buscando.get();
  },
  consulta() {
    return Template.instance().busarConsulta.get();
  },
  inventario() {
    let filtro = Template.instance().filtros.get();
    let precio = 0;
    let tiempo = 0;
    let marca = 0;
    let fecha = 0;
    if(filtro === 'tiempo') {
      tiempo = 1;
    }else if(filtro === 'marca') {
      marca = 1;
    } else if(filtro === 'precio') {
      precio = 1;
    }
    let proyection = {
      sort: { precio_unit: precio }
    }
    let resultado = "";
    resultado = Inventario.find({});
    // console.log("resultado .. " + resultado);
    if (resultado) {
      return resultado;
    }
  },
});

Template.portal.events({
  'keyup [name="buscar"]' (event, template) {
    let valor = event.target.value.trim();

    if (valor !== '' && event.keyCode === 13 ) {
      template.busarConsulta.set(valor);
      template.buscando.set(true);
    }

    if (valor === '') {
      template.busarConsulta.set(valor);
    }
  },
  'click .fl-tiempo'(event, template) {
    template.filtros.set('tiempo');
    console.log("Filtrando por tiempo");
  },
  'click .fl-precio'(event, template) {
    template.filtros.set('precio');
    console.log("Filtrando por precio");
  },
  'click .fl-marca'(event, template) {
    template.filtros.set('marca');
    console.log("Filtrando por marca");
  }
})