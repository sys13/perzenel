Template.registerHelper("fullName", function() {
  return Meteor.settings && Meteor.settings.public &&
    Meteor.settings.public.fullName
})

Template.registerHelper("shortName", function() {
  return Meteor.settings && Meteor.settings.public &&
    Meteor.settings.public.shortName
})
