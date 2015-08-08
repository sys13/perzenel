Template.home.helpers({
  publishedDate: function() {
    return this && this.publishedAt
     && moment(this.publishedAt).format('LL')
  }
})
