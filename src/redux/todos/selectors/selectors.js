export const todoListGet = (state) => state.todos.list;

export const todoFilterGet = (state) => state.todos.listFilter;

export const todoCategoryGet = (state) => state.todos.category;

export const currentTodoGet = (state) =>
    state.todos.list.find((item) => {
        if (item.id === state.todos.currentTodo) {
            return { ...item };
        } else if (item.statuses.process) {
            return { ...item };
        }
    });
