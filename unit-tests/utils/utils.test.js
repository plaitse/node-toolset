const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    let res = utils.square(2);
    
    expect(res).toBe(4).toBeA('number');
});

it('should square a number', (done) => {
    utils.asyncSquare(4, (sum) => {
        expect(sum).toBe(16).toBeA('number');
        done();
    });
});

it('should expect some values', () => {
    //expect(12).toNotBe(11);
    //expect({name: 'Pierre'}).toNotEqual({name: 'Test'});
    //expect([2,3,4]).toExclude(5);
    expect({
        name: 'Pierre',
        age: 25,
        location: 'Paris'
    }).toExclude({
        age: 26
    })
});

it('should verify first and last names are set', () => {
    let res = utils.setName(new Object, 'Paul Rblt');
    
    expect(res).toInclude({
        firstName: 'Paul',
        lastName: 'Rblt'
    })
});