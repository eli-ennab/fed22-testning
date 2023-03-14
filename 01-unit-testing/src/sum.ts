/**
 * Add a and b together and return sum
 */
/*
export const sum = (a: number, b: number) => {
	return a + b
}
*/

// with a rest syntax (that takes all parameters we send in and put all of them in an array)
export const sum = (...numbers: number[]) => {

	// const sum = numbers.reduce((acc, num) => {
	// 	return acc + num
	// }, 0)
	// return sum

	return numbers.reduce((acc, num) => acc + num, 0)
}
