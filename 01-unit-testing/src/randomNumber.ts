/**
 * Get a random number between 1-10
 */
export const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max )
}
