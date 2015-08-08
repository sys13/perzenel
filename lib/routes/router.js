Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  trackPageView: true
})

var homeSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});

Router.route('/', {
  name: 'home',
  subscriptions: function() {
    return [
      homeSubs.subscribe('latestProjects'),
      homeSubs.subscribe('latestBlogPosts')
    ]
  },
  data: function() {
    return {
      projects: Projects.find({}, {name: 1, slug: 1, projectDate: 1,
        sort: {projectDate: -1}, limit: 4}),
      posts: Post.find({}, {title: 1, slug: 1, excerpt: 1, publishedAt: 1,
        sort: {publishedAt: -1}, limit: 4})
    }
  }
})

Router.route('/about', {
  name: 'about',
})
