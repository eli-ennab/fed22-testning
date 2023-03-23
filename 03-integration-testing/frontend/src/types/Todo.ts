export type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

export type TodoList = Todo[]

export type CreateTodoData = {
	title: string,
	completed: boolean,
}

export type UpdateTodoData = {
	title?: string,
	completed?: boolean,
}
