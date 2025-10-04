import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {

  const MyRoute = createBrowserRouter(createRoutesFromElements(

    <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
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
