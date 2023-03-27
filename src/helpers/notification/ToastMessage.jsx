import React from 'react'
import { ToastContainer } from 'react-toastify'

function ToastMessage() {
   return (
      <>
         <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
         />
      </>
   )
}

export default ToastMessage