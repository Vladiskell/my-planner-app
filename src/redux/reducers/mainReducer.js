import * as types from '../constants/actionTypes'

const initialState = []

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [...state, { ...action.payload }]
        case types.SET_TODO_LIST:
            return [...action.payload.todoList].sort((item) => (item.completed ? -1 : 1))
        case types.SET_IS_TODO_COMPLETED:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.completed = !item.completed
                    item.important = false
                    item.process = false
                    return item
                } else {
                    return item
                }
            })
        case types.SET_IS_TODO_IMPORTANT:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.important = !item.important
                    item.completed = false
                    return item
                } else {
                    return item
                }
            })
        case types.SET_IS_TODO_PROCESS:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.process = !item.process
                    item.completed = false
                    return item
                } else {
                    return item
                }
            })
        case types.EDIT_TODO:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.text
                    return item
                } else {
                    return item
                }
            })
        case types.DELETE_TODO:
            return state.filter((item) => item.id !== action.payload.id)
        // -----------------------------------------------------------------------------------------
        // test
        case types.TOGGLE_TODO:
            return state.map((item) => (item.id === action.payload.id ? { ...item, completed: !item.completed } : item))
        // -----------------------------------------------------------------------------------------
        // \test
        default:
            return state
    }
}

export default mainReducer
