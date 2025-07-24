import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'

function App() {

  const MyRoute = createBrowserRouter(createRoutesFromElements(

    <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}></Route>
        </Route>
    </Route>

  ))


  return (
    <>
      <RouterProvider router={MyRoute}></RouterProvider>
    </>
  )
}

export default App
