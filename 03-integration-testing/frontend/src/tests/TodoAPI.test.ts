import { describe, it, expect } from 'vitest'
import * as TodoAPI from '../services/TodoAPI'
import { CreateTodoData } from '../types/Todo'

const newTodo: CreateTodoData = {
	title: 'a todo',
	completed: false
}

describe('TodoAPI', () => {

	it('should return a list', async () => {
		const todos = await TodoAPI.getTodos()

		expect(Array.isArray(todos)).toBe(true)
	})

	it('should create a todo', async () => {
		const createdTodo = await TodoAPI.createTodo(newTodo)

		expect(createdTodo).toMatchObject({
			id: expect.any(Number),
			title: newTodo.title,
			completed: newTodo.completed
		})
	})

	it('should create and then get the todo', async () => {
		// create a todo
		const createdTodo = await TodoAPI.createTodo(newTodo)

		// try to get the todo
		const getTodoResponse = await TodoAPI.getTodo(createdTodo.id)

		// expect both todos to have the same key/values
		expect(getTodoResponse.data).toStrictEqual(createdTodo)
	})

	it('should create and then find the todo among all todos', async () => {
		// create a todo
		const createdTodo = await TodoAPI.createTodo(newTodo)

		// get all todos
		const todos = await TodoAPI.getTodos()

		// expect createdTodo to exist in the array of all todos
		expect(todos).toContainEqual(createdTodo)
	})

	it('should create and then update the todo', async () => {
		// create a todo
		const createdTodo = await TodoAPI.createTodo(newTodo)

		// update the created todo
		const updatedTodo = await TodoAPI.updateTodo(createdTodo.id, {
			completed: true
		})

		expect(updatedTodo).toMatchObject({
			id: createdTodo.id,
			title: createdTodo.title,
			completed: true,
		})
	})

	it('should create and then delete a todo', async () => {
		// create a todo
		const createdTodo = await TodoAPI.createTodo(newTodo)

		// delete the created todo
		await TodoAPI.deleteTodo(createdTodo.id)

		// get all todos
		const todos = await TodoAPI.getTodos()

		expect(todos).not.toContainEqual(createdTodo)
	})
})
