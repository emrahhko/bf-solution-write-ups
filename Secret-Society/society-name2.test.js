import {societyName} from './society-name2.js'

describe('take the first letter of each element and sort it alphabetically', () => {
    test('should return ABC when Albert, Benoit, and Camille are passed', () => {
        expect(societyName(['Albert', 'Benoit', 'Camille'])).toEqual('ABC');
    });

    test('should return ABDF when Alice, Bob, David, and Frank are passed', () => {
        expect(societyName(['Alice', 'Bob', 'David', 'Frank'])).toEqual('ABDF');
    });

    test('should return EGP when Emma, George, and Peter are passed', () => {
        expect(societyName(['Emma', 'George', 'Peter'])).toEqual('EGP');
    });

    test('should return JPKR when John, Patrick, Kate, and Rachel are passed', () => {
        expect(societyName(['John', 'Patrick', 'Kate', 'Rachel'])).toEqual('JKPR');
    });

    test('should return empty string when empty array is passed', () => {
        expect(societyName([])).toEqual('');
    });

    test('should return D when only one name "David" is passed', () => {
        expect(societyName(['David'])).toEqual('D');
    });
});