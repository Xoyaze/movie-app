import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import ErrorPage from "./Pages/ErrorPage"
import MovieRenderer from "./Components/MovieRenderer"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MovieRenderer />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/:movieType',
        element: <MovieRenderer />,
      },
    ],
  }
])


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
