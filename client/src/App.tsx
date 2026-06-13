import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";



export const router = createBrowserRouter(
  createRoutesFromElements(
       <>

       <Route path="/" element = {<Layout/>} >
         {/* <Route index element ={ <Home/>} /> */}
       </Route>
       
       </>
  ) 
)