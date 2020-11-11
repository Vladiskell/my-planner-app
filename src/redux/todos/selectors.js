export const getTodosSelector = (state) => state.todos.list;

export const getCurrentTodoSelector = (state) =>
    state.todos.list.find((item) => item.id === state.todos.currentTodo) ??
    state.todos.list.find((item) => item.statuses.process) ??
    state.todos.list[0];

export const getProcessTodoSelector = (state) => state.todos.list.find((item) => item.statuses.process);
