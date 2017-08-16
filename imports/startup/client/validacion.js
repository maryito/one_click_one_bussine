import { Accounts } from 'meteor/accounts-base';

Accounts.onLogin(function () {  
    FlowRouter.go('portal')
    // Seems a bit too simple? more on this later!
  })
  
  Tracker.autorun(function () {  
    if (!Meteor.userId()) {
      FlowRouter.go('home')
    }
  })