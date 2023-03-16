import { afterEach, describe, expect, it, vi } from 'vitest'
import mockLocalStorage from '../mocks/mockedLocalStorage'
import { Todo } from '../types/Todo'
import { getTodos, saveTodos } from '../utils/todoStorage'

global.localStorage = mockLocalStorage()

const TODO: Todo = {
	id: 1,
	title: 'My test todo',
	completed: false,
}

describe('get todos', () => {
	it('returns empty list of todos', () => {
		// spy on a method to make sure it has been called on
		const getItemSpy = vi.spyOn(global.localStorage, 'getItem')
		const todos = getTodos()

		expect(getItemSpy).toHaveBeenCalledOnce()
		expect(todos.length).toBe(0)
	})
})

describe('save todos', () => {

	afterEach(() => {
		global.localStorage.clear()
	})

	it('can save a todo', () => {
		const setItemSpy = vi.spyOn(global.localStorage, 'setItem')
		const result = saveTodos([TODO])

		expect(result.success).toBe(true)
		expect(setItemSpy).toHaveBeenCalledOnce()
	})

	it('can save a todo and then get it', () => {
		const result = saveTodos([TODO])
		expect(result.success).toBe(true)

		const todos = getTodos()
		expect(todos).toContainEqual(TODO)
	})
})
