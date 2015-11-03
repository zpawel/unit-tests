describe('exercise1', function ()
{
    'use strict';

    var exercise1 = window.exercise1;

    describe('getDescendingNumbers', function ()
    {
        it('should return string of descending numbers, separated by spaces', function ()
        {
            expect(exercise1.getDescendingNumbers(15, 1)).toEqual('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
        });
        it('should return false, if numberTo is heiger the numberTo', function()
        {
            expect(exercise1.getDescendingNumbers(1,15)).toEqual(false);
        });
        it('sh0uld return false, if numberTo is string', function()
        {
            expect(exercise1.getDescendingNumbers(15,aaaa)).toEqual(false);
        });
        it('sh0uld return false, if numberFrom is string', function()
        {
            expect(exercise1.getDescendingNumbers(15,aaaa)).toEqual(false);
        });
    });

    describe('deleteString', function ()
    {
        
    });

    describe('stringCounter', function ()
    {

    });

    describe('squareOdd', function ()
    {

    });

    describe('areaOfTrapezoid', function ()
    {

    });
});
