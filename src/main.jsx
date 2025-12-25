
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/Dashboard.jsx'
import Groupdetails from './components/groupdetails.jsx'
if(!localStorage.getItem('usersdata')) localStorage.setItem('usersdata',JSON.stringify([])) ; 
if(!localStorage.getItem('groupsdata')) localStorage.setItem('groupsdata',JSON.stringify([])) ; 
if(!JSON.parse(localStorage.getItem('loggedin'))){
  const gmailRegex = /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,29}@gmail\.com$/;
  const currentuser = prompt('Sign Up/Sign In (Enter Gmail)') ;
  if(gmailRegex.test(currentuser)){
    localStorage.setItem('currentuser' , currentuser) ; 
    localStorage.setItem('loggedin' , true) ; 
    const usersdata = JSON.parse(localStorage.getItem('usersdata')) ;
    if(usersdata.filter((userdata)=>{
      return userdata.id == currentuser ; 
    }).length == 0 ){
      usersdata.push({
        id:currentuser,
        groups:[],
        expenses:[],
      })
      localStorage.setItem('usersdata',JSON.stringify(usersdata));
    }
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
    },
    {
      path:'groups/:gid',element:<Groupdetails/>
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
