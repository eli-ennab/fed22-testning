import { should } from "chai"

describe('Todos', () => {

	beforeEach(() => {
		cy.visit('/')
	})

	it('should see at least one todo', { defaultCommandTimeout: 6000 }, () => {
		cy.get('#todos')
			.find('li')
			.should('have.length.at.least', 1)
	})

	it('create todo form should be empty', () => {
		cy.get('#new-todo-title')
			.should('be.empty')
			.should('contain', '')
	})

	it('can not create a todo without a title', () => {
		const emptyTodoTitle = ''
		cy.get('#new-todo-title').type(`${emptyTodoTitle}{enter}`)

		cy.get('#error')
			.should('contain', 'Title cannot be empty')
	})

	it('can create a new todo (and see it in the list)', () => {
		const todoTitle = 'Learn E2E Testing'
		cy.get('#new-todo-title').type(`${todoTitle}{enter}`)

		cy.get('#todos li .todo-title')
			.last()
			.should('have.text', todoTitle)
	})

	it('can type in the create todo form and then reset the form', () => {
		const typingTodo = 'Learn E2E Tes..'
		cy.get('#new-todo-title').type(`${typingTodo}`)

		cy.contains('Reset').click()

		cy.get('#new-todo-title')
			.should('not.contain', typingTodo)
			.should('contain', '')
	})

})
