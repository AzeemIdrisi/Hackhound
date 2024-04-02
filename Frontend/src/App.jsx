
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home/Home';
import MainLayout from './Page/More/MainLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: isAuthenticated ? (
      //   <MainLayout/>
      // ) : (
      //   <Login />
      // ),
      element:<MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        // {
        //   path: "/monitor",
        //   children:[
        //     {

        //       path:"/monitor/:Slugs",
        //       element:<Monitoring/>
        //     }
        //   ]
        // },
        // {
        //   path: "/about",
        //   element: <About/>,
        // },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
