import { rest } from 'msw'
import { Todo, TodoData } from '../types/Todo'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const handlers = [
	// Mock get all todos, GET http://localhost:3001/todos
	rest.get(BASE_URL + '/todos', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([])
		)
	}),

	// Mock get a single todo, GET http://localhost:3001/todos/:todoId
	// rest.get(BASE_URL + '/todos/:todoId', null)

	// Mock create todo, POST http://localhost:3001/todos
	// rest.post(BASE_URL + '/todos', null)

	// Mock update todo, PATCH http://localhost:3001/todos/:id

	// Mock delete todo, DELETE http://localhost:3001/todos/:id
]
