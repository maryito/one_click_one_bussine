import './producto.html';
import './orden.html';

import { Template } from 'meteor/templating';
import { Productos } from '/imports/api/productos/productos.js';
import { conexion } from '/imports/api/productos/conexiones.js';

Template.producto.onCreated(function () {
    let template = Template.instance();

    template.buscando = new ReactiveVar();

    const id = FlowRouter.current().params.id;
    template.autorun(() => {
        conexion.subscribe('producto.portal', id, () => {
            // setTimeout(() => {
            //     template.buscando.set(false);
            // }, 300);
        })
    })
});

Template.producto.helpers({
    DataProducto() {
        data = Productos.find();
        if (data) {
            return data;
        }
    }
})