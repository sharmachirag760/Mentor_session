import Home from "../page";
import React from 'react';
import Signin from "../page/signin";
import Signup from "../page/signup";

const routes=[
    {path:'/',element:<Home/>,isProtected:false},
    {path:'/signin',element:<Signin/>,isProtected:false},
    {
        path:'/signup/:role',
        element:<Signup/>,
        isProtected:false
    },
  ]
  
  export default routes;