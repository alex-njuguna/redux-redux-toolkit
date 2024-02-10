import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const newUSer = action.payload;
      const userValidation = /^[A-Za-z]{4, 10}$/i.test(newUSer.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4, 10}$/i.test(
          newUSer.password
        );
      state.user = newUSer;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(newUSer);
        sessionStorage.setItem("authUSer", saveState);
      }
    },

    logout(state) {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
