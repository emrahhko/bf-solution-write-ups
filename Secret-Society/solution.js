/**
 * takes in an array of names and returns the first letter of each name sorted alphabetically.
 *
 *@param {string} [friends] - The month to check to which quarter it belongs to.
 *
 * @returns {string} with the first letter of each names sorted alphabetically.
 */


export function societyName(friends) {
  let result = [];
  for (let i = 0; i < friends.length; i++) {
    let firstChars = '';
    firstChars = friends[i][0];
    result.push(firstChars);
  }
  return result.sort().join('');
}
