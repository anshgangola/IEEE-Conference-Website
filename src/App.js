import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import RootLayout from "./components/Pages/Root";
import About from "./components/Pages/About";
import Committees from "./components/Pages/Committees";
import Registration from "./components/Pages/Registration";
import Sponsors from "./components/Pages/Sponsors";
import Program from "./components/Pages/Program";
import Venue from "./components/Pages/Venue";

const router=createBrowserRouter([
  {path:'/',element:<RootLayout></RootLayout>,children:[
    {index:true,element:<Home></Home>},
    {path:'about',element:<About></About>},
    {path:'committees',element:<Committees></Committees>},
    {path:'program',element:<Program></Program>},
    {path:'registration',element:<Registration></Registration>},
    {path:'sponsors',element:<Sponsors></Sponsors>},
    {path:'venue',element:<Venue></Venue>},
  ]}
]);
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
