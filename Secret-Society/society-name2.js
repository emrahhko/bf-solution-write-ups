/**
 * takes in an array of names and returns the first letter of each name sorted alphabetically.
 *
 *@param {string} [friends] - The month to check to which quarter it belongs to.
 *
 * @returns {string} with the first letter of each names sorted alphabetically.
 */

export function societyName(friends) {
	let sortedFriends = friends.sort(),
			upperLetters = '';
	for(let i = 0; i < sortedFriends.length; i++) {
		upperLetters += sortedFriends[i][0].toUpperCase();
	}
	return upperLetters;
}