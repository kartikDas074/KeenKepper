import { createBrowserRouter } from "react-router";
import Mainlayout from "../MainLayout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Timeline from "../Pages/TImeline/Timeline";
import Status from "../Pages/Status/Status";
import Error from "../Pages/Error/Error";
import FriendsDetail from "../Pages/FriendsDetail/FriendsDetail";

export const router=createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
             path:'TimeLine',
             Component: Timeline
        },
        {
            path:'Status',
            Component: Status
        },
        {
          path:'friends/:Id',
          loader:()=> fetch('/friend.json'),
          Component:FriendsDetail
        }
    ]
  },
  {
    path:'*',
    Component:Error
  }
])