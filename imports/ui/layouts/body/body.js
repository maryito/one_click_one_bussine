import './body.html';

Template.App_body.events({
    'click [data-toggle="offcanvas"]'(events) {
        $("#navigation").toggleClass("hidden-xs");
    }
})
