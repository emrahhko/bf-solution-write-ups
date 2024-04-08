# [EmySaf](https://edabit.com/user/AhDqTeNTHQ9DJZ6yo)

```js
function societyName(friends) {
 let sortedFriends = friends.sort(),
   upperLetters = '';
 for(let i = 0; i < sortedFriends.length; i++) {
  upperLetters += sortedFriends[i][0].toUpperCase();
 }
 return upperLetters;
}
```

## Strategy

The user's strategy involves defining a function named societyName
that takes an array of friend names (friends) as parameter.
And return the resulting string, which represents the secret society name
formed by taking the first character of each friend's name in the alphabetical order.

## Implementation

Sort the array of friend names alphabetically using the **sort()** method.

Concatenate all the transformed first characters into a single string
using the **join('')** method.

Return the resulting string, with the first character of each friend's name
in alphabetical order.

## Possible Refactors

While the user's implementation is clear and effective,
it could be further improved by using more modern JavaScript
features such as arrow functions and array methods to achieve the same
functionality in a more concise manner.

## References

This solution was interesting to me because the user had a similar approach to 
the problem with me the only difference is that she sort the array before 
the `for` loop.
