const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
    const db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Paul', 33);
        expect(spy).toHaveBeenCalledWith('Paul', 33);
    });

    // Test communication between functions
    it('should call saveUser with user object', () => {
        const email = 'test@example.com';
        const password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});