// import sum from './sum'
const sum = require('./sum')


test('Check sum functions', () => {
    expect(sum(1, 4)).toBe(5);
    expect(sum(1, '4')).toBe(5);
    // expect(5).toBe(6);
})

test('Check falsy values', () => {
    expect(sum(NaN, 4)).toBe(4);
    expect(sum(false, 9)).toBe(9);
    expect(sum(undefined, '3')).toBe(3);
    expect(sum(3, null)).toBe(3);

})

