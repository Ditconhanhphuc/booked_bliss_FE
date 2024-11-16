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
import SinglePage from "./routes/singlePage/singlePage";
import Profile from "./Routes/UserProfile/userProfile";
import Chat from "./Routes/Chat/Chat"
import CreatePost from "./Routes/CreatePost/CreatePost";
import AdjustAccount from "./Routes/AdjustAccount/AdjustAccount";
import LandingPage from "./Routes/LandingPage/LandingPage";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />,
        children:[
          {
            path:"/",
            element: <LandingPage/>
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
            path: "/Profile",
            element: <Profile />,
          },
          {
            path: "/Chat",
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

