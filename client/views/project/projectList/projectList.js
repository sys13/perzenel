Template._projectList.helpers({
  date: function() {
    return this.projectDate
     && moment(this.projectDate).format('ll')
  },
})
