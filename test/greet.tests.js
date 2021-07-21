describe('Test my greet function' , function(){
    it("it should return 'Hello, Sakhile' when called with 'Sakhile'", function(){
       
        assert.equal("Hello, Sakhile", greet("Sakhile"), "this should not be true");

        
        });
        it("it should return 'Hello, Baloyi' when called with 'Baloyi'", function(){
       
            assert.equal("Hello, Baloyi", greet("Baloyi"), "this should not be true");
    

    });

});