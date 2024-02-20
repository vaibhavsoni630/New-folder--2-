import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/forms/SignUp";
import Login from "./components/forms/Login"
import App from "./App";
import Home from "./components/Home";
import Modal from "./modal/Modal";
import MentorPage from "./components/mentorSection/MentorePage";

const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
     },
     {
        path: "/home",
        element: <Home />,
     },
     {
          path: "/sign-up",
          element: <SignUp />,
     },
     {
        path: "/login",
        element: <Login />,
     },
     {
        path: "/modelone",
        element: <Modal  />,
     },
     {
        path: "/mentor",
        element: <MentorPage  />,
     },
     
]);

export default  router;
