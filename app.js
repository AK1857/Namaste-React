  import React from "react"
  import ReactDOM from "react-dom/client"
  import Header from "./src/components/Header"
  import Body from "./src/components/Body"
  import About from "./src/components/AboutUs"
  import Error from "./src/components/Error"
  import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom"
import Contact from "./src/components/Contact"


  const AppLayout=()=>{
    return(<div className="app">
        <Header />
        <Outlet />
        
                <h2>Footer</h2>
    </div>)
  }


const AppConfigration=createBrowserRouter([{
path:"/",
element:<AppLayout />,
children:[{
  path:"/",
  element:<Body />,
},
{
  path:"/about",
  element:<About />,
},
{
  path:"/contact",
  element:<Contact />,
}
],
errorElement:<Error />,
},

])

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={AppConfigration} />)
  // root.render(<AppLayout/>)