import { describe, it, expect, beforeAll } from 'vitest'
import { clone } from "../utils/arrays"

describe('clones an array', () => {

	const a = ['i', 'like', 'unit', 'tests']
	let b: Array<any> = []

	beforeAll(() => {
		console.log("all ma clonez")
		b = clone(a)
	})

	// test that cloned array contains the same number of elements as the original array
	it('contains the same number of items', () => {
		expect(b.length).toBe(a.length)
	})

	// test that cloned array contains the same items as the original array
	it('contains the same items', () => {
		expect(b).toEqual(a)
	})

	// test that cloned array is *NOT* the same as the original array
	it('is not the same array', () => {
		expect(b).not.toBe(a)
	})

})
