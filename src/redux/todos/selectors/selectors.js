export const todoListGet = (state) => state.todos.list;

export const todoFilterGet = (state) => state.todos.listFilter;

export const todoCategoryGet = (state) => state.todos.currentCategory;

export const currentTodoGet = (state) =>
    state.todos.list.find((item) => item.id === state.todos.currentTodo) ??
    state.todos.list.find((item) => item.statuses.process) ??
    state.todos.list[0];

export const inProcessTodoGet = (state) => state.todos.list.find((item) => item.statuses.process);
