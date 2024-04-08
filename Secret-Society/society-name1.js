/**
 * takes in an array of names and returns the first letter of each name sorted alphabetically.
 *
 *@param {string} [friends] - The month to check to which quarter it belongs to.
 *
 * @returns {string} with the first letter of each names sorted alphabetically.
 */


export const societyName = (friends) => friends.sort().map((name) => name[0].toUpperCase()).join('');