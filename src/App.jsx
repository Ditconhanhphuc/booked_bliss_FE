import ListPage from "./routes/listPage/listPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./Routes/UserProfile/userProfile";
import Chat from "./Routes/Chat/Chat"
import CreatePost from "./routes/CreatePost/CreatePost";
import HomePage from "./routes/homePage/homePage";
import Register from "./routes/register/register";
import Login from "./routes/login/login";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage"
import ContactUs from "./Routes/LeftoverPage/ContactUs";
import TypeofHouses from "./Routes/LeftoverPage/TypeOfHouses";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/homePage",
          element: <HomePage />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/CreatePost",
          element: <CreatePost />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/houses",
          element: <TypeofHouses />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

