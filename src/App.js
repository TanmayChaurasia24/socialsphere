import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./app.css";
import Leftbar from "./components/leftbar/Leftbar.jsx";
import Rightbar from "./components/rightbar/Rightbar.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";

function App() {
  let currentuser = false;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{flex: 6}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const protectedroute = ({ children }) => {
    if (!currentuser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <protectedroute>
          <Layout />
        </protectedroute>
      ),
      children: [
        {
          path: "/", // This is the default route within Layout
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
