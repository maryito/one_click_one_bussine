import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
// Agregamos el componente de barra de navegacion
import '../../ui/pages/navegacion/navegacion.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/ordenes', {
  name: 'App.ordenesCompras',
  action() {
    BlazeLayout.render('App_body', { main: 'ordenesCompras' });
  },
});

FlowRouter.route('/productos', {
  name: 'App.producto',
  action() {
    BlazeLayout.render('App_body', { main: 'producto' });
  },
});
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
