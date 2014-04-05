(function() {
  "use strict";

  Tinytest.add("Errors collection works", function(test) {
    test.equal(Errors.collection.find({}).count(), 0);

    Errors.raise("A new error!");
    test.equal(Errors.collection.find({}).count(), 1);

    Errors.collection.remove({});
  });

  Tinytest.addAsync("Errors template works", function(test, done) {
    Errors.raise("A new error!");
    test.equal(Errors.collection.find({seen: false}).count(), 1);

    OnscreenDiv(Spark.render(function() {
      return Template.meteorErrors();
    }));

    Meteor.setTimeout(function() {
      test.equal(Errors.collection.find({seen: false}).count(), 0);
      test.equal(Errors.collection.find({}).count(), 1);
      Errors.clear();

      test.equal(Errors.collection.find({seen: true}).count(), 0);
      done();
    }, 500);
  });

})();
