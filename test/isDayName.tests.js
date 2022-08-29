import assert from 'assert'
import isDayName from "../isDayName.js";


describe ('The isDayName function', function() {

    it ('should return true when tested with Monday', function() {
        assert.equal(true, isDayName('Monday'))
    });

    it ('should return false when tested using September', function() {
        assert.equal(false, isDayName('September'))
    });
    
});