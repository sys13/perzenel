Template._linksList.onCreated(function(){
  Meteor.subscribe('links')
})


Template._linksList.helpers({
  links: function() {
    return Links.find()
  }
})
