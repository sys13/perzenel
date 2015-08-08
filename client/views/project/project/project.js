Template._projectInfo.helpers({
  date: function() {
    return this.project && this.project.projectDate
     && moment(this.project.projectDate).format('MMMM YYYY')
  },
  collabs: function() {
    if (this.project && this.project.collaborators) {
      return addNotLastToArray(this.project.collaborators)
    }
  },
  tagList: function() {
    if (this.project && this.project.tags) {
      return addNotLastToArray(this.project.tags)
    }
  }
})

function addNotLastToArray(list) {
  var list = list || []
  var listLength = list.length
  return _.map(list, function(value, index){
    return {value: value, notLast: index != listLength - 1}
  })
}
