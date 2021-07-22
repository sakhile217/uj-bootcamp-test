describe('Test isWeekday' , function(){
    it("it should return 'Hello, isWeekday' when called with 'isWeekday'", function(){

        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
        
    });

});