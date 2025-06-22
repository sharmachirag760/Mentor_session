import Home from "../page";
import React from 'react';
import Signin from "../page/signin";

const routes=[
    {path:'/',element:<Home/>,isProtected:false},
    {path:'/signin',element:<Signin/>,isProtected:false},
  ]
  
  export default routes;