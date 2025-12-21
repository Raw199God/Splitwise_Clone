
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/Dashboard.jsx'

if(!JSON.parse(localStorage.getItem('loggedin'))){
  const gmailRegex = /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,29}@gmail\.com$/;
  const currentuser = prompt('Sign Up/Sign In (Enter Gmail)') ;
  if(gmailRegex.test(currentuser)){
    localStorage.setItem('currentuser' , currentuser) ; 
    localStorage.setItem('loggedin' , true) ; 
  }
  else{
    alert('Invalid Gmail');
    location.reload();
  }
}
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
