import React from 'react';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './routes/routing';



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
