export default function userReducer(state = null, action){
  console.log("action.payload",action.payload)
    switch(action.type){
      case "LOGGED_IN_USER":
        return action.payload;
        case"LOGOUT":
        return action.payload;
        default:
            return state;
    }
}

