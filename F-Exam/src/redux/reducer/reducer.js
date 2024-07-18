let intlialize = {
    userList : [],
    error : null 
}

const UserReducer = ( state=intlialize,action) => {
    switch (action.type) {
        case "ADDEM" : 
        return {
            ...state,
            userList:[...state.userList,action.payload]
        }

        default:
            return state;
    }
}
export default UserReducer