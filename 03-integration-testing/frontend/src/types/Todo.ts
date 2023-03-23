export type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

export type TodoResponse = {
	status: "success" | "fail" | "error",
	data: Todo,
	message?: string,
}

export type TodoList = Todo[]

export type TodoListResponse = {
	status: "success" | "fail" | "error",
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
