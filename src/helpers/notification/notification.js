import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notification = (text, type) => {
   toast(text, {
      type: type
   });

}

