const strbtw1and10 = require('./strbtw1and10.js')
const reverseString = require('./reversestr.js')
const calc = require('./calculator.js')
const capitalize = require('./capitalizeFirst.js')
const stringbtw1and10 = require('./strbtw1and10.js')
const stringLength = require('./strlength.js')

it('works', ()=>{
     expect(1).toBe(1)
})

it('correct string length', ()=>{
    expect(stringLength('Hippopotamus')).toBe(12)
})

it('at least one char and <= 10 char', ()=>{
    expect(stringbtw1and10('campus')).toBe(6)
})

it('reverse', ()=>{
    expect(reverseString('Bellow')).toBe('wolleB')
})


it('capitalise first string', ()=>{
    expect(capitalize('bowel')).toBe('Bowel')
})

describe('calc', ()=>{
    test('addition test', ()=>{
        expect(calc.add(3,5)).toBe(8);
        expect(calc.add(8,5)).toBe(13);
        expect(calc.add(13,5)).toBe(18);
        expect(calc.add(18,5)).toBe(23);
    })

    test('multiplication test', ()=>{
        expect(calc.multiply(3,5)).toBe(15);
        expect(calc.multiply(5,5)).toBe(25);
        expect(calc.multiply(7,7)).toBe(49);
        expect(calc.multiply(6,8)).toBe(48);
    })


    test('division test', ()=>{
        expect(calc.divide(15,5)).toBe(3);
        expect(calc.divide(48,6)).toBe(8);
        expect(calc.divide(56,7)).toBe(8);
        expect(calc.divide(63,9)).toBe(7);
    })

    test('subtraction test', ()=>{
        expect(calc.subtract(15,5)).toBe(10);
        expect(calc.subtract(48,6)).toBe(42);
        expect(calc.subtract(56,7)).toBe(49);
        expect(calc.subtract(63,9)).toBe(54);
    })


})