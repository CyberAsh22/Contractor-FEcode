import { LOGIN_SUCCESS, LOGOUT_REQUEST } from "../Actions/actionType";

const INITIAL_STATE = {
  access_token: "",

  isLogin: false,
  user: 'xxx',
  mode: "light",
};

export default (state = INITIAL_STATE, action) => {
  const {type,payload}=action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
   
        user: payload.email,
        userName:payload.email,
        email:payload.email,
        isLogin: true,
        // user: action.payload?.data.user,
        // isLogin: true,
        // access_token: action.payload?.token,
      };
      break;
    case LOGOUT_REQUEST:
      return {
        ...state,
     
        access_token: "",
        isLogin: false,
        user_type: "",
        user: null,
        userName:"",
        email:"",
      };
    default:
      return state;
  }
};
