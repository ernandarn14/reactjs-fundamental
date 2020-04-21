const init_state = {
    id: 0,
    username: "Doraemon",
};

export default (state = init_state, action) => {
    if (action.type == "USERNAME"){
        return { ...state, username: action.payload };
    } else if(action.type == "GET_USER"){
        return { ...state, username: `Hello, ${action.payload}` };
    } else {
        return { ...state };
    }
    
};