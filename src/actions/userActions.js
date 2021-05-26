import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const {data} = await axios.post("http://localhost:5001/api/users/login", {
            email,
            password
        });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            playload: data
        })

        //save user info in local sotrage in chrome
        localStorage.setItem("userInfo", JSON.stringify(data));

    }catch(err){
        dispatch({
            type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
        })

    }
}