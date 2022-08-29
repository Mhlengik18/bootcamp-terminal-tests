import assert from 'assert'
import getDay from "../getDay.js";


describe ('The isDayName function', function() {

    it ('should return Monday when tested using 2012-02-13', function() {
        assert.equal('Monday', getDay('2012-02-13'))
    });

    it ('should return Friday when tested using 1999-09-24', function() {
        assert.equal('Friday', getDay('1999-09-24'))
    });
    
});