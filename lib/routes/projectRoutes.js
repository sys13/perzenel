var projectListSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});

Router.route('/project/list', {
  name: 'projectList',
  subscriptions: function() {
    return projectListSubs.subscribe('projectList')
  },
  data: function() {
    return {projects: Projects.find({})}
  }
})

var projectSub = new SubsManager({cacheLimit: 20, expireIn: 3});

Router.route('/project/:slug', {
  name: 'project',
  subscriptions: function() {
    return projectSub.subscribe('project', this.params.slug)
  },
  data: function() {
    var slug = this.params.slug
    return {project: Projects.findOne({slug: slug})}
  }
})
