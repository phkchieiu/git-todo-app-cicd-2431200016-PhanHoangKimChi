const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        const todoText = 'do laundry';
        service.addTodo(todoText);
        // Then, assert that the service's todos array has a length of 1.
        expect(service.getTodos()).toHaveLength(1);
        // Assert that the text of the first todo matches the input text.
        expect(service.getTodos()[0].text).toBe(todoText);
    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        const todoText = 'do my homework';
        service.addTodo(todoText);
        // Then, get its ID and call the toggleTodoComplete method.
        const todoID = service.getTodos()[0].id;
        service.toggleTodoComplete(todoID);
        // Assert that the 'completed' property of that todo is now true.
        expect(service.getTodos()[0].completed).toBe(true);
        // Call toggleTodoComplete again and assert that it's false.
        service.toggleTodoComplete(todoID);
        expect(service.getTodos()[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        const todoText = 'do my homework';
        service.addTodo(todoText);
        // Get its ID and call the removeTodo method.
        const todoID = service.getTodos()[0].id;
        service.removeTodo(todoID);
        // Assert that the service's todos array is now empty (length of 0).
        expect(service.getTodos()).toHaveLength(0);
        // expect(service.getTodos().length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        service.addTodo('');
        // Assert that the todos array still has a length of 0.
        expect(service.getTodos()).toHaveLength(0);
    });
});
