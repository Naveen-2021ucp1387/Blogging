import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-4 py-2 text-gray-200 bg-orange-500 rounded-full duration-200 hover:bg-green-500 hover:text-white focus:outline-none"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
