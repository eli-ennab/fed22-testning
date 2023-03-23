export type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

export type TodoList = Todo[]

export type JSend<T> = {
	status: "success" | "fail" | "error",
	data: T,
}

export type CreateTodoData = {
	title: string,
	completed: boolean,
}

export type UpdateTodoData = {
	title?: string,
	completed?: boolean,
}
