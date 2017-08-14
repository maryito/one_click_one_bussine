import { accountsUIBootstrap3 } from 'meteor/ian:accounts-ui-bootstrap-3';
import { Accounts } from 'meteor/accounts-base';

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

Accounts.ui.config(
    {
        // passwordSignupFields: 'USERNAME_ONLY',
        extraSignupFields: [
            {
                fieldName: 'name',
                fieldLabel: 'Empresa',
                inputType: 'text',
                showFieldLabel: true,
                visible: true,
                validate(value, errorFunction) {
                    // agregar esquemas
                    if (!value) {
                        errorFunction('Por favor ingrese nombre de la empresa');
                        return false;
                    } else { return true; }
                },
            },
        ],
    });

accountsUIBootstrap3.logoutCallback = function (error) {
    if (error) console.log("Error:" + error);
    Router.go('home');
}
