describe('Todos', () => {

	beforeEach(() => {
		cy.visit('/')
	})

	context('initial state', () => {
		it('should see at least one todo', { defaultCommandTimeout: 6000 }, () => {
			cy.get('#todos')
				.find('li')
				.should('have.length.at.least', 1)
		})

		it('should not show error dialog', () => {
			cy.get('#error')
				.should('not.be.visible')
		})
	})

	context('create todo', () => {
		it('create todo form should be empty', () => {
			cy.get('#new-todo-title')
				.should('have.value', '')
		})

		it('cannot create a todo without a title', () => {
			// cy.get('#new-todo-title').type(`{enter}`)
			cy.get('[type="submit"]').click()

			cy.get('#error')
				.should('be.visible')
				.contains('Title cannot be empty')
		})

		it('can create a new todo (and see it in the list)', () => {
			const todoTitle = 'Learn E2E Testing'
			cy.get('#new-todo-title').type(`${todoTitle}{enter}`)

			cy.get('#todos')
				.find('li')
				.last()
				.contains(todoTitle)

			cy.get('#new-todo-title').should('have.value', '')
		})

		it('can type in the create todo form and then reset the form', () => {
			const typingTodo = 'Learn E2E Tes..'
			cy.get('#new-todo-title').type(`${typingTodo}`)

			cy.get('[type="reset"]').click()

			cy.get('#new-todo-title')
				.should('have.value', '')
		})
	})
})
