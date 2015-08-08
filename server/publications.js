Meteor.publish('project', function(slug) {
  //TODO: add index to slug, but really, not a big collection so probably okay
	check(slug, String)
	return Projects.find({slug: slug})
})

Meteor.publish('projectList', function() {
	return Projects.find({}, {name: 1, slug: 1, projectDate: 1,
		sort: {projectDate: -1}})
})

Meteor.publish('links', function() {
	return Links.find({})
})

Meteor.publish('latestProjects', function() {
	return Projects.find({}, {name: 1, slug: 1, projectDate: 1,
		sort: {projectDate: -1}, limit: 4})
})

Meteor.publish('latestBlogPosts', function() {
	return Post.find({published: true}, {title: 1, slug: 1, excerpt: 1, publishedAt: 1,
		sort: {publishedAt: -1}, limit: 4})
})
