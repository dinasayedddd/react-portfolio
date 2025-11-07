import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Componts/Sidebar/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./Componts/MasterLayout/MasterLayout";
import Notfound from "./Componts/Notfound/Notfound";
import Home from "./Componts/Home/Home";
import About from "./Componts/About/About";
import Skills from "./Componts/Skills/Skills";
import Work from "./Componts/Work/Work";
import Experience from "./Componts/Experience/Experience";

function App() {
  let routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <MasterLayout />,
        errorElement: <Notfound />,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "skills", element: <Skills /> },
          { path: "work", element: <Work /> },
          { path: "experience", element: <Experience /> },
        ],
      },
    ],
    {
      // Use Vite's injected base URL (from vite.config.js). This avoids hardcoding
      // a GitHub Pages subdirectory when deploying to Netlify (which serves at root).
      // If you later deploy to GitHub Pages under /react-portfolio/, set `base` in
      // vite.config.js to '/react-portfolio/' and this will automatically match.
      basename: import.meta.env.BASE_URL,
    }
  );

  return (
    <>
      <RouterProvider router={routes} />
      {/* <Sidebar /> */}
    </>
  );
}

export default App;
