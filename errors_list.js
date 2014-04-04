(function() {
  "use strict";

  Template.meteorErrors.helpers({
    errors: function() {
      return Errors.collection.find();
    }
  });

  Template.errors.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
      Errors.collection.update(error._id, {
        $set: {
          seen: true
        }
      })
    });
  }

})();
