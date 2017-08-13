import './navegacion.html';

Template.navegacion.helpers({
    nombreEmpresa() {
        console.log(Meteor.user());
        
        return Meteor.user().profile.name;
    }
});