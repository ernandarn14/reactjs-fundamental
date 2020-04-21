export const todoInputHandler = (text) => {
    return {
        type: "ON_CHANGE_TODO_INPUT",
        payload: text
    }
}

export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}