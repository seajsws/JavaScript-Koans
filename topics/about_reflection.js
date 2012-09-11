module('About Reflection (topics/about_reflection.js)');

var A = function() {
  this.aprop = 'A';
};

var B = function() {
  this.bprop = 'B';
};

B.prototype = new A();

test('typeof', function() {
  equal(typeof({}), __, 'what is the type of an empty object?');
  equal(typeof('apple'), __, 'what is the type of a string?');
  equal(typeof(-5), __, 'what is the type of -5?');
  equal(typeof(false), __, 'what is the type of false?');
});

test('property enumeration', function() {
  var keys = [];
  var values = [];
  var person = {name: 'Amory Blaine', age: 102, unemployed: true};
  for (var p in person) {
    keys.push(p);
    values.push(person[p]);
  }
  ok(keys.equalTo(['__', '__', '__']), 'what are the property names of the object?');
  ok(values.equalTo(['__', __, __]), 'what are the property values of the object?');
});

test('hasOwnProperty', function() {
  var b = new B();

  var keys = [];
  for (var a in b) {
    keys.push(a);
  }
  equal(keys.length, __, 'how many elements are in the keys array?');
  ok(keys.equalTo([__, __]), 'what are the properties of the array?');

  // hasOwnProperty returns true if the parameter is a property directly on the object,
  // but not if it is a property accessible via the prototype chain.
  var ownKeys = [];
  for (var r in b) {
    if (b.hasOwnProperty(r)) {
      ownKeys.push(r);
    }
  }
  equal(ownKeys.length, __, 'how many elements are in the ownKeys array?');
  ok(ownKeys.equalTo([__, __]), 'what are the own properties of the array?');
});

test('constructor property', function() {
  var a = new A();
  var b = new B();
  equal(typeof(a.constructor), __, "what is the type of a's constructor?");
  equal(a.constructor.name, __, "what is the name of a's constructor?");
  equal(b.constructor.name, __, "what is the name of b's constructor?");
});

// test('eval', function() {
//   // eval executes a string
//   var result = '';
//   eval("result = 'apple' + ' ' + 'pie'");
//   equal(result, __, 'what is the value of result?');
// });
