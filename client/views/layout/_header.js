Template._header.helpers({
})

Template._header.events({
  'click .log-out': function(event){
    event.stopPropagation()
    Meteor.logout(function(){
      Router.go('home')
    })
  },
})
