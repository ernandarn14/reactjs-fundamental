const init_state = {
    id: 0,
    username: "Doraemon",
    fullname: "",
    role: "",
    testing: "",
    testing2: "", 
    errMsg: "",
};

export default (state = init_state, action) => {
    if (action.type == "USERNAME") {
        return { ...state, username: action.payload };
    } else if (action.type == "GET_USER") {
        return { ...state, username: `Hello, ${action.payload}` };
    }  else if (action.type == "ON_LOGIN_SUCCESS"){
        const { username, fullname, role, id } = action.payload
        return { ...state, username, fullname, role, id }
    } else if (action.type == "ON_LOGIN_FAIL"){
        return { ...state, errMsg: action.payload }
    }
    else if (action.type === "ON_REGISTER_SUCCESS") {
        const { username, fullname, role, id, password } = action.payload
        return { ...state, username, fullname, role, id,password }
    }
    else if (action.type == "ON_REGISTER_FAILL"){
        return { ...state, errMsg: action.payload }
    }
    // else if (action.type == "TESTING") {
    //     return { ...state, testing: action.payload };
    // } else if (action.type == "TESTING2") {
    //     return { ...state, testing2: action.payload };
    // } 
    else {
        return { ...state };
    }

};