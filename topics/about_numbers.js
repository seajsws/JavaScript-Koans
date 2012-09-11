module('About Numbers (topics/about_numbers.js)');

test('types',
     function() {
       var typeOfIntegers = typeof(6);
       var typeOfFloats = typeof(3.14159);
       equal(typeOfIntegers === typeOfFloats, __, 'are ints and floats the same type?');
       equal(typeOfIntegers, __, 'what is the javascript numeric type?');
       equal(1.0, __, 'what is a integer number equivalent to 1.0?');
     });

test('NaN',
     function() {
       var resultOfFailedOperations = 7 / 'apple';
       equal(isNaN(resultOfFailedOperations), __, 'what will satisfy the equals assertion?');
       //       equal(resultOfFailedOperations !== isNaN(), __, 'is NaN == NaN?');
});
