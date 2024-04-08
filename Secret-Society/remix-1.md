# [Remix 1](https://edabit.com/user/ta3yJE2eunJcwFWz9?tab=collections)

This solution is a similar method to mine [EmySaf](https://edabit.com/user/AhDqTeNTHQ9DJZ6yo)


```js
function societyName(friends) {
 let sortedFriends = friends.sort(),
   result = '';
 for(let i = 0; i < sortedFriends.length; i++) {
  result += sortedFriends[i][0].toUpperCase();
 }
 return result;
}
```

## Strategy

I took the liberty to remix this code with mine and sort the array at the beginning 
it seemed more clever

## Implementation

Sort the array of friend names alphabetically using the **sort()** method.

Concatenate all the transformed first characters into a single string
using the **join('')** method.

Return the resulting string, with the first character of each friend's name
in alphabetical order.

## Possible Refactors

Could be improved by using more modern JavaScript
features such as arrow functions and array methods to achieve the same
functionality in a more concise manner.
But i only use JavaScript that I already "know"

## References
[Web3-Array-Method](https://www.w3schools.com/js/js_array_methods.asp)
