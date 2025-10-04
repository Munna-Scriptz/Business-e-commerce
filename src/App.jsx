import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Details from './pages/Details'
import AdminLayout from './layout/AdminLayout'
import UploadProduct from './pages/UploadProduct'
import ViewOrders from './pages/ViewOrders'
import DeleteUpdateProduct from './pages/DeleteUpdateProduct'

function App() {

  const MyRoute = createBrowserRouter(createRoutesFromElements(

    <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/details' element={<Details/>}></Route>
        </Route>

        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<UploadProduct />}></Route> 
          <Route path='/admin/view-orders' element={<ViewOrders />}></Route> 
          <Route path='/admin/delete-update-product' element={<DeleteUpdateProduct />}></Route> 
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
