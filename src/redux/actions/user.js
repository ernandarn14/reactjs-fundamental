export const userInputHandler = (text) => {
    return {
        type: "USERNAME",
        payload: text
    }
}

export const getUser = (item) => {
    return {
        type: "GET_USER",
        payload: item
    }
}