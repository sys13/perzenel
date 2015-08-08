Links = new Meteor.Collection('links')

Schemas.Link = new SimpleSchema({
  name: {type: String},
  url: {type: String},
  urlDisplayText: {type: String},
  createdAt: Schemas.createdAt,
  updatedAt: Schemas.updatedAt,
})

Links.attachSchema(Schemas.Link)
