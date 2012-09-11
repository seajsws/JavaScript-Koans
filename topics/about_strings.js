
module('About Strings (topics/about_strings.js)');

test('delimiters', function() {
  var singleQuotedString = 'apple';
  var doubleQuotedString = 'apple';
  equal(singleQuotedString === doubleQuotedString, __, 'are the two strings equal?');
});

test('concatenation', function() {
  var fruit = 'apple';
  var dish = 'pie';
  equal(fruit + ' ' + dish, __, 'what is the value of fruit + " " + dish?');
});

test('character Type', function() {
  var characterType = typeof('Amory'.charAt(1)); // typeof will be explained in about reflection
  equal(characterType, __, 'Javascript has no character type');
});

test('escape character', function() {
  var stringWithAnEscapedCharacter = "\\pple";
  equal(stringWithAnEscapedCharacter, __, 'what  is the value of stringWithAnEscapedCharacter?');
});

test('string.length', function() {
  var fruit = 'apple';
  equal(fruit.length, __, 'what is the value of fruit.length?');
});

test('slice', function() {
  var fruit = 'apple pie';
  equal(fruit.slice(0, 5), __, 'what is the value of fruit.slice(0,5)?');
});
