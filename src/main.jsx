
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/Dashboard.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    {
      index:true , element:<Dashboard/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
    <>
    <RouterProvider router = {router} >
    <App />
    </RouterProvider>
    </>

)
