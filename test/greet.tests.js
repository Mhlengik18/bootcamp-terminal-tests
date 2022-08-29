import assert from 'assert'
import greet from '../greet.js'

describe ('The greet function', function() {

    it ('should be able to greet Siya', function() {
        assert.equal('Hello, Siya', greet('Siya'))
    });

    it ('should be able to greet SMK', function() {
        assert.equal('Hello, SMK', greet('SMK'))
    });
    
});