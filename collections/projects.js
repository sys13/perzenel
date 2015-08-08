Projects = new Meteor.Collection('projects')

Schemas.Collaborators = new SimpleSchema({
  name: {type: String},
  url: {
    type: String,
    optional: true
  }
})

Schemas.Project = new SimpleSchema({
  name: {type: String},
  tagline: {type: String},
  slug: {type: String},
  projectDate: {
    type: Date,
    optional: true
  },
  codeRepo: {
    type: String,
    optional: true
  },
  collaborators: {
    type: [Schemas.Collaborators],
    optional: true
  },
  tags: {
    type: [String],
    optional: true
  },
  content: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        settings: {}// summernote options goes here
      }
    }
  },
  createdAt: Schemas.createdAt,
  updatedAt: Schemas.updatedAt,
})

Projects.attachSchema(Schemas.Project)
