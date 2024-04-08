# [Remix 4](https://edabit.com/user/ta3yJE2eunJcwFWz9?tab=collections)

 The solution that I write was inspired by this one -> [3st3](https://edabit.com/user/yFGcFfNsHt2Z4G5a9)
 I was bluffed by the fact that the user write it in one line with array method that 
 I didn't know.

```js
function societyName(friends) {
    return friends.map(x => x[0]).sort().join("")
};
```

## Strategy 

The strategy here was to create a function named societyName that takes an array
of friend names (friends) as its parameter, and using different built in method
to return string with first letter of each of their names, sorted in alphabetical
order, which represents the name of their
 Secret Society.

## Implementation

**sort()** method Sort the array of friend names alphabetically.

**map()** method is used to transform each name in the sorted array by extracting
the first character of each name and converting it to uppercase.

**join('')** method is used to concatenate all the transformed 
first characters into a single string.

implicit return**: user's solution is a single expression
so he didn't need a `return` statement.

## Possible Refactors

No is already quite clear and concise, it could be implemented

## References

[Web3-map-method](https://www.w3schools.com/jsref/jsref_map.asp)


