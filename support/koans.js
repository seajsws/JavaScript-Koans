
var __ = "incomplete";

// ignore this. It simplifies determining array equality
Array.prototype.equalTo = function(compareTo) {
        if (this.length !== compareTo.length) {
                return false;
        }
        for(var i = 0; i < compareTo.length; i++) {
                if (this[i] !== compareTo[i]) {
                        return false;
                }
        }
        return true;
};

QUnit.done(
  function(details) {
    if (details.failed > 0) {
      var failed = $('ol#qunit-tests > li.fail');
      failed.hide();
      $(failed[0]).show();
      $('#test-actual').hide();
      $('#test-diff').hide();

    }
  });

var not = function(state, message) {
  return ok(!state, message);
};