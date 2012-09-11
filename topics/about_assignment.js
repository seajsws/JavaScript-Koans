
module('About Assignment (topics/about_assignment.js)');

test('local variables', function() {
  var temp = __;
  equal(1, temp, 'Assign a value to the variable temp');
});

test('global variables', function() {
  temp = 1;
  equal(temp, window.__, 'global variables are assigned to the window object');
});
