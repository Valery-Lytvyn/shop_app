import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { notification } from "../../../helpers/notification/notification";
import { TOAST_ERROR, TOAST_SUCCESS } from "../../../constants/toastTypes";
import "./subscribeForm.scss";

function SubscribeForm() {
   const [email, setEmail] = useState("")

   const handleChange = (e) => {
      setEmail(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (isEmail(email)) {
         notification("Congratulations, you are subscribed", TOAST_SUCCESS);
         setEmail("");
      } else {
         notification("Enter a valid email", TOAST_ERROR);
      }
   }

   return (
      <div className="subscribe">
         <form className="subscribe-form"
            onSubmit={(e) => handleSubmit(e)}
         >
            <input
               className="subscribe-input p-2"
               value={email}
               type="text"
               placeholder="e-mail"
               onChange={handleChange}
            />
            <button className="subscribe-btn py-2"
               type="submit"
            >Subscribe</button>
         </form>
      </div>
   )
}

export default SubscribeForm