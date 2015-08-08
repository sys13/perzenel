Meteor.startup(function () {
  // set browser-policy settings
  BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com')
  BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com')
  BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com')
  BrowserPolicy.content.allowOriginForAll('www.google.com')
  BrowserPolicy.content.allowOriginForAll('www.youtube.com')
  BrowserPolicy.content.disallowInlineScripts()

})
