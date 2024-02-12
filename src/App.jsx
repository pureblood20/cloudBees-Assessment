import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users, { loader as usersLoader } from "./Pages/Users";
import HomeLayout from "./Pages/HomeLayout";
import UserDetails, { loader as userDetailLoader } from "./Pages/UserDetails";

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Users />,
          loader: usersLoader,
        },
        {
          path: "/user/:name",
          element: <UserDetails />,
          loader: userDetailLoader,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
