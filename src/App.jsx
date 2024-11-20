import ListPage from "./routes/listPage/listPage";
// import HomePage from "./routes/homePage/homePage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./routes/UserProfile/userProfile";
import Chat from "./Routes/Chat/Chat"
import CreatePost from "./routes/CreatePost/CreatePost";
import AdjustAccount from "./Routes/AdjustAccount/AdjustAccount";
import HomePage from "./routes/homePage/homePage";
import Register from "./routes/register/register";
import Login from "./routes/login/login";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />,
        children:[
          {
            path:"/",
            element: <HomePage/>
          },
          {
            path:"/homePage",
            element: <HomePage/>
          },
          {
            path:"/register",
            element: <Register/>
          },
          {
            path:"/login",
            element: <Login/>
          },
          {
            path:"/:id",
            element:<SinglePage/>
          },
          {
            path:"/list",
            element:<ListPage/>
          },
          {
            path: "/profile",
            element: <Profile />,
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
            path: "/AdjustAccount",
            element: <AdjustAccount />,
          },
        ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

