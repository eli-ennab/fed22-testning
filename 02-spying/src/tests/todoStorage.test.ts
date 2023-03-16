import { describe, expect, it } from 'vitest'
import mockLocalStorage from '../mocks/mockedLocalStorage'
import { getTodos, saveTodos } from '../utils/todoStorage'

global.localStorage = mockLocalStorage()

describe('get todos', () => {
	it('returns empty list of todos', () => {
		const todos = getTodos()

		expect(todos.length).toBe(0)
	})
})

describe('save todos', () => {
	it.todo('can save a todo', () => {})
	it.todo('can save a todo and then get it', () => {})
})
