import ListPage from "./routes/listPage/listPage";
// import HomePage from "./routes/homePage/homePage";
// eslint-disable-next-line no-unused-vars
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // eslint-disable-next-line no-unused-vars
  Route,
  // eslint-disable-next-line no-unused-vars
  Link,
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import Profile from "./Routes/UserProfile/userProfile";
import Chat from "./Routes/Chat/Chat"
import CreatePost from "./Routes/CreatePost/CreatePost";
import AdjustAccount from "./Routes/AdjustAccount/AdjustAccount";
import LandingPage from "./Routes/LandingPage/LandingPage";
import FAQPage from "./Routes/FAQPage/FAQPAge";


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
          {
            path: "/FAQ",
            element: <FAQPage />
          }
        ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

