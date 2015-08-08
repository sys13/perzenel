Template.about.helpers({
  aboutContent: function() {
    return Meteor.settings.public.aboutContent
  },
  contactContent: function() {
    return Meteor.settings.public.contactContent
  },
  officeContent: function() {
    return Meteor.settings.public.officeContent
  },
  officeGMapsEmbed: function() {
    return Meteor.settings.public.officeGMapsEmbed
  },
})
