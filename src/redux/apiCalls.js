import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post('/authentication/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        console.dir(err);
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user) => {
    dispatch(registerStart());

    try {
      const res = await publicRequest.post("/authentication/register", user);
      console.dir(res)
      dispatch(registerSuccess(res.data));
    } catch (err) {
      console.dir(err)
      dispatch(registerFailure());
    }
};