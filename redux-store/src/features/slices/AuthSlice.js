import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const newUser = action.payload;
      const userValidation = newUser
      const passwordValidation = newUser.password
      state.user = newUser;
      if (!userValidation || !passwordValidation) {
        state.user = {
          name: "",
          password: "",
          authUser: false,
        };
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(newUser);
        sessionStorage.setItem("authUser", saveState);
        console.log(newUser)
      }
    },

    logout(state) {
      state.user = {
        name: "",
        password: "",
        authUser: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
