describe('Test fromWhere' , function(){
    it("it should return'place' when called with 'place'", function() {


assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CC'), 'Some other place!');
});

});