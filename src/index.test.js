var expect = require('chai').expect,
    dino = require('./index');

describe('dino-name', function () {

    
    describe('all', function () {

        
        it('should be a array of strings', function () {
            expect(dino.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array) {  
                return array.every(function (item) {  
                    return typeof item === 'string';
                });
            }
        });
        
        
    });
    
    it('should contain dino breed "Lophostropheus"', function () {
        expect(dino.all).to.include('Lophostropheus');
    }); 
});

describe('random', function () {
    
    it('should return a random dino', function () {
        var randomItem = dino.random();
        expect(dino.all).to.include(randomItem);
    });
    
});

