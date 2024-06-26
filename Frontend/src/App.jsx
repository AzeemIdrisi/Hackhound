
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home/Home';
import MainLayout from './Page/More/MainLayout';
import Login from './Page/Home/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Admin from './Page/Admin/Admin';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  const router = createBrowserRouter([
    {
      path: "/",
      // element: isAuthenticated ? (
      //   <MainLayout/>
      // ) : (
      //   <Login />
      // ),
      element: isAuthenticated ? (
        <MainLayout/>
      ) : (
        <Login/>
      ),
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/admin",
          element:<Admin/>
        }
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
