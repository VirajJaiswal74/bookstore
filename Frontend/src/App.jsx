import React from "react";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Contact } from "./pages/Contact";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

export const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      {/* <Home/>
   <Course/> */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Toaster />
    </>
  );
};

/*

MODERN REACT ROUTE --->>


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home';
import Course from './components/Course';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/course', element: <Course /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

*/
