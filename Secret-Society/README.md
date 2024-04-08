# [Secret Society](https://edabit.com/challenge/zQm9YZTTFPhNtYjDr)

A group of friends have decided to start a secret society. 
The name will be the first letter of each of their names, 
sorted in alphabetical order.

## Syntax

> societyName(`array`, ) -> `string`

### Parameters

**friends**: `array`

- An array of friends names.

### Return Value: `string`

A string taking the first character of each friend's name in the alphabetical order.

## Test Cases

```js
// directly from Edabit
describe('Basic Tests', () => {
Test.assertEquals(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
Test.assertEquals(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
Test.assertEquals(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')
Test.assertEquals(societyName(['Sherlock', 'Irene', 'John']), 'IJS')
Test.assertEquals(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS')
});

// My Test
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
```


## Use Cases

```js
 const ourNames = ['Albert', 'Benoit', 'Camille'];
 const secretName = societyName(ourNames);
 console.log(ourNames);
```
```js
 const ourNames = ['John', 'Doe', 'Max'];
 const secretName = societyName(ourNames);
 console.log(ourNames);
```

---

## Retrospective

I get to improve my loop skills and learn new built in 
array method.

### Continue Doing

- other challenge to learn new technique/method etc...

### Start Doing

- Study more solutions that look very similar, there's a lot to learn from the
  small differences.
- Rename all the variables in functions when I start studying them, I think this
  could help inspire new remixes
- Step through the code many different ways: debugger, JS Tutor, drawing on it,
  trace tables.

### Stop Doing

Getting demotivate when i struggle to find the solution.
