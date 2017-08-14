import './navegacion.html';

Template.navegacion.helpers({
    nombreEmpresa() {
        return Meteor.user().profile.name;
    }
});