import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/loading/loading.js';
// Agregamos el componente de barra de navegacion
import '../../ui/pages/navegacion/navegacion.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/proveedor', {
  name: 'App.proveedor',
  action() {
    BlazeLayout.render('App_body', { main: 'proveedor' });
  },
});

FlowRouter.route('/fabricante', {
  name: 'App.fabricante',
  action() {
    BlazeLayout.render('App_body', { main: 'fabricante' });
  },
});
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
FlowRouter.route('/portal', {
  name: 'App.portal',
  action() {
    BlazeLayout.render('App_body', { main: 'portal' });
  },
});
FlowRouter.route('/ingresar', {
  name: 'App.ingresar',
  action() {
    BlazeLayout.render('App_body', { main: 'ingreso' });
  },
});