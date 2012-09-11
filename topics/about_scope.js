
module('About Scope (topics/about_scope.js)');

thisIsAGlobalVariable = 77;

test('global variables', function() {
  equal(thisIsAGlobalVariable, __, 'is thisIsAGlobalVariable defined in this scope?');
});

test('variables declared inside of a function', function() {
  var outerVariable = 'outer';

  // this is a self-invoking function. Notice that it calls itself at the end ().
  (function() {
    var innerVariable = 'inner';
    equal(outerVariable, __, 'is outerVariable defined in this scope?');
    equal(innerVariable, __, 'is innerVariable defined in this scope?');
  })();

  equal(outerVariable, __, 'is outerVariable defined in this scope?');
  // var isInnerVariableDefined = true;
  // try {
  //   innerVariable;
  // } catch (e) {
  //   isInnerVariableDefined = false;
  // }
  // equal(isInnerVariableDefined, __, 'is innerVariable defined in this scope?');
});
