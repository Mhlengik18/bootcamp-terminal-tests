import assert from 'assert'
import isFromBellville from "../isFromBellville.js";


describe ('The isFromBellville function', function() {

    it ('should return true when tested with CY 123', function() {
        assert.equal(true, isFromBellville('CY 123'))
    });

    it ('should return false when tested using CJ 312', function() {
        assert.equal(false, isFromBellville('CJ 312'))
    });
    
});