// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
module('About Prototype Chain (topics/about_prototype_chain.js)');

var father = {
  b: 3,
  c: 4
};

var child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */

test("Is there an 'a' and 'b' own property on childObj?", function() {
  equal(child.a, __, 'what is \'a\' value?');
  equal(child.b, __, 'what is \'b\' value?');
});

test("If 'b' was removed, whats b value?", function() {
  delete child.b;
  equal(child.b, __, 'what is \'b\' value now?');
});


// Is there a 'c' own property on childObj? No, check its prototype
// Is there a 'c' own property on childObj.[[Prototype]]? Yes, its value is...
test("Is there a 'c' own property on childObj.[[Prototype]]?", function() {
  equal(child.hasOwnProperty('c'), __, 'childObj.hasOwnProperty(\'c\')?');
});

test("Is there a 'c' own property on childObj.[[Prototype]]?", function() {
  equal(child.c, __, 'childObj.c?');
});


// Is there a 'd' own property on childObj? No, check its prototype
// Is there a 'd' own property on childObj.[[Prototype]]? No, check it prototype
// childObj.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
test("Is there an 'd' own property on childObj?", function() {
  equal(child.d, __, 'what is the value of childObj.d?');
});


