describe('Test transportFee' , function(){
    it("it should return'price' when called with 'price'", function() {

        assert.equal(transportFee('morning'), 'R20');

assert.equal(transportFee('afternoon'), 'R10');

assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

});

});