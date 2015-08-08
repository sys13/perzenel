Blog.config({
  adminRole: 'blogAdmin',
  authorRole: 'blogAuthor',
  comments: {
    disqusShortname: Meteor.settings.disqusShortname
  },
  rss: {
    title: Meteor.settings.RSSTitle,
    description: Meteor.settings.RSSDescription
  }
})

if (Meteor.users.find().count() === 0 ) {
  console.log('adding user fixtures')
  console.log(Meteor.settings)

  var users = [
    {name: Meteor.settings.name, email: Meteor.settings.email,
      roles: ['sa', 'admin', 'blogAdmin']}
  ]

  _.each(users, function (user) {
    var id = Accounts.createUser({
      email: user.email,
      password: 'wwwwww',
      profile: { name: user.name }
    })

    if (user.roles.length > 0) {
      // Need _id of existing user record so this call must come
      // after `Accounts.createUser` or `Accounts.onCreate`
      if (user.group) {
        Roles.addUsersToRoles(id, user.roles, user.group)
      } else {
        Roles.addUsersToRoles(id, user.roles)
      }
    }
  })
}
