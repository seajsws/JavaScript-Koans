
module('About Arrays (topics/about_arrays.js)');

test('array literal syntax and indexing', function() {
  var favouriteThings = ['cellar door', 42, true]; // note that array elements do not have to be of the same type
  equal(favouriteThings[0], __, 'what is in the first position of the array?');
  equal(favouriteThings[1], __, 'what is in the second position of the array?');
  equal(favouriteThings[2], __, 'what is in the third position of the array?');
});

test('array type', function() {
  equal(typeof([]), __, 'what is the type of an array?');
});

test('length', function() {
  var collection = ['a', 'b', 'c'];
  equal(collection.length, __, 'what is the length of the collection array?');
});

test('splice', function() {
  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var workingWeek = daysOfWeek.splice(__, __);
  ok(workingWeek.equalTo([__]), 'what is the value of workingWeek?');
  ok(daysOfWeek.equalTo([__]), 'what is the value of daysOfWeek?');
});

test('stack methods', function() {
  var stack = [];
  stack.push('first');
  stack.push('second');

  equal(stack.pop(), __, 'what will be the first value poped off the stack?');
  equal(stack.pop(), __, 'what will be the second value poped off the stack?');
});
