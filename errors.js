Errors = {
  collection: new Meteor.Collection(null),

  raise: function(message) {
    Errors.collection.insert({
      message: message,
      seen: false
    })
  },

  clear: function() {
    Errors.collection.remove({
      seen: true
    })
  }

}
