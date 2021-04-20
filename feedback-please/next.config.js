const withTM = require('next-transpile-modules')(['@gripeless/pico', 'fp-ts-fluture', 'fp-ts']); // pass the modules you would like to see transpiled

module.exports = withTM();