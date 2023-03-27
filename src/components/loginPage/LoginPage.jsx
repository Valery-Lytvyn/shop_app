import React from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../redux/shopSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { TOAST_SUCCESS } from "../../constants/toastTypes";
import { notification } from "../../helpers/notification/notification";
import "./loginPage.scss";

function LoginPage() {
   const dispatch = useDispatch();
   const auth = getAuth();
   const provider = new GoogleAuthProvider()
   const navigate = useNavigate();

   const handleLogin = () => {
      signInWithPopup(auth, provider)
         .then((result) => {
            const user = result.user;
            dispatch(addUser({
               userId: user.uid,
               userName: user.displayName,
               userEmail: user.email,
               userPhoto: user.photoURL,
            }))
         })
         .then(navigate("/"))
         .catch((error) => {
            console.log(error)
         });
   }

   const handleSignOut = () => {
      dispatch(removeUser());
      notification("Log Out Successfully", TOAST_SUCCESS)
   }

   return (
      <div className="login-page py-4">
         <button className="login-btn py-1 px-4 my-4 mx-2"
            onClick={handleLogin}
         ><FcGoogle />
            <span> Sign in with Google</span>
         </button>
         <button className="Sign-out-btn py-1 px-4 my-4 mx-2"
            onClick={handleSignOut}
         > Sign Out </button>
      </div>
   )
}

export default LoginPage