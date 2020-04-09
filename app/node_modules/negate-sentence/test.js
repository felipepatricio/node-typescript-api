const { equal } = require('assert')
const negate = require('.')

equal(negate('is positive'), 'is not positive')
equal(negate('is negative'), 'is not negative'),
equal(negate('is finite'), 'is not finite'),
equal(negate('is infinite'), 'is not infinite'),
equal(negate('is present'), 'is not present'),
equal(negate('is empty'), 'is not empty'),
equal(negate('is null'), 'is not null'),
equal(negate('is undefined'), 'is not undefined'),
equal(negate('is void'), 'is not void'),
equal(negate('is even'), 'is not even'),
equal(negate('is odd'), 'is not odd'),
equal(negate('is alpha'), 'is not alpha'),
equal(negate('is alphanumeric'), 'is not alphanumeric'),
equal(negate('is numeric'), 'is not numeric'),
equal(negate('is an array'), 'is not an array'),
equal(negate('is an object'), 'is not an object'),
equal(negate('is frozen'), 'is not frozen'),
equal(negate('is sealed'), 'is not sealed'),
equal(negate('is a regexp'), 'is not a regexp'),
equal(negate('is a regex'), 'is not a regex'),
equal(negate('is a number'), 'is not a number'),
equal(negate('is a multiple of'), 'is not a multiple of'),
equal(negate('is a digit'), 'is not a digit'),
equal(negate('is decimal'), 'is not decimal'),
equal(negate('is a string'), 'is not a string'),
equal(negate('is a symbol'), 'is not a symbol'),
equal(negate('is a map'), 'is not a map'),
equal(negate('is a weakmap'), 'is not a weakmap'),
equal(negate('is a set'), 'is not a set'),
equal(negate('is a weakset'), 'is not a weakset'),
equal(negate('is a boolean'), 'is not a boolean'),
equal(negate('is a date'), 'is not a date'),
equal(negate('is an email'), 'is not an email'),
equal(negate('is true'), 'is not true'),
equal(negate('is false'), 'is not false'),
equal(negate('is truthy'), 'is not truthy'),
equal(negate('is falsy'), 'is not falsy'),
equal(negate('is divisible by'), 'is not divisible by'),
equal(negate('is prime'), 'is not prime'),
equal(negate('is palindrome'), 'is not palindrome'),
equal(negate('is sooner than'), 'is not sooner than'),
equal(negate('is before'), 'is not before'),
equal(negate('is later than'), 'is not later than'),
equal(negate('is after'), 'is not after'),
equal(negate('is different than'), 'is not different than'),
equal(negate('is greater than or equals'), 'is not greater than or equals'),
equal(negate('is greater than'), 'is not greater than'),
equal(negate('is less than or equals'), 'is not less than or equals'),
equal(negate('is less than'), 'is not less than'),
equal(negate('is between'), 'is not between'),
equal(negate('is below'), 'is not below'),
equal(negate('is above'), 'is not above'),
equal(negate('is at least'), 'is not at least'),
equal(negate('is at most'), 'is not at most'),
equal(negate('is in'), 'is not in'),
equal(negate('is a url'), 'is not a url'),
equal(negate('is defined'), 'is not defined'),
equal(negate('is an video'), 'is not an video'),
equal(negate('is an audio'), 'is not an audio'),
equal(negate('is an image'), 'is not an image'),
equal(negate('is an empty array'), 'is not an empty array'),
equal(negate('is an empty string'), 'is not an empty string'),
equal(negate('is an empty object'), 'is not an empty object'),
equal(negate('is an empty set'), 'is not an empty set'),
equal(negate('is an empty map'), 'is not an empty map')
equal(negate('is equal to'), 'is not equal to')

equal(negate('are empty'), 'are not empty'),
equal(negate('are present'), 'are not present')

equal(negate('lt'), 'nlt'),
equal(negate('gt'), 'ngt')
equal(negate('and'), 'nand')
equal(negate('lte'), 'nlte'),
equal(negate('gte'), 'ngte')
equal(negate('eq'), 'neq')
equal(negate('or'), 'nor')
equal(negate('xor'), 'nxor')

equal(negate('has a whitespace'), 'does not have a whitespace'),
equal(negate("have more than"), 'do not have more than'),
equal(negate("have less than"), 'do not have less than'),
equal(negate("have many"), 'do not have many'),
equal(negate("have"), 'do not have'),
equal(negate("has more than"), 'does not have more than'),
equal(negate("has less than"), 'does not have less than'),
equal(negate("has many"), 'does not have many'),
equal(negate("has length of at least"), 'does not have length of at least'),
equal(negate("has length of at most"), 'does not have length of at most'),
equal(negate("has length of"), 'does not have length of'),
equal(negate("has extension of"), 'does not have extension of'),
equal(negate('has a newline'), 'does not have a newline'),
equal(negate('has a number'), 'does not have a number'),
equal(negate('has numbers'), 'does not have numbers')

equal(negate('bitwise or'), 'not bitwise or'),
equal(negate('bitwise and'), 'not bitwise and')
equal(negate('bitwise xor'), 'not bitwise xor'),
equal(negate('bitwise not'), 'not bitwise not')

equal(negate('responds to'), 'does not respond to')
equal(negate('starts with'), 'does not start with')
equal(negate('ends with'), 'does not end with')

equal(negate('includes'), 'does not include')
equal(negate('matches'), 'does not match')

equal(negate('equals'), 'does not equal'),
equal(negate('contains'), 'does not contain')



