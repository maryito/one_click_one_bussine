// Import client startup through a single index entry point

import './routes.js';

import { accountsUIBootstrap3 } from 'meteor/ian:accounts-ui-bootstrap-3';

accountsUIBootstrap3.setLanguage('es');
accountsUIBootstrap3.map('es', {
    _resetPasswordDialog: {
    title: 'Restablece tu contraseña',
    cancel: 'Cancelar',
    submit: 'Guardar',
    },
    _enrollAccountDialog: {
    title: 'Escribe una contraseña',
    cancel: 'Cerrar',
    submit: 'Guardar contraseña',
    },
});