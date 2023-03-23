export type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

export type TodoResponse = {
	status: string,
	data: Todo,
	message?: string,
}

export type TodoList = Todo[]

export type TodoListResponse = {
	status: string,
	data: TodoList,
	message?: string,
}

export type CreateTodoData = {
	title: string,
	completed: boolean,
}

export type UpdateTodoData = {
	title?: string,
	completed?: boolean,
}
