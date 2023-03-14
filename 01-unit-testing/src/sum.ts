/**
 * Add a and b together and return sum..
 */
/*
export const add = (a: number, b: number) => {
	return a + b
}
*/

// with a rest syntax (that takes all parameters we send in and put all of them in an array)
export const add = (...numbers: number[]) => {

	// const add = numbers.reduce((acc, num) => {
	// 	return acc + num
	// }, 0)
	// return sum

	return numbers.reduce((acc, num) => acc + num, 0)
}

/**
 * Subract numbers from each other and return sum
 */
export const sub = (initialValue: number, ...numbers: number[]) => {
	return numbers.reduce((acc, num) => acc - num, initialValue)
}
