import React from 'react'

export default function Header({content,children}) {
    function logout(){
        const response = confirm('Are You Sure you want to logout ?') ;
        if(response){
            localStorage.setItem('loggedin' , false) ;
            location.reload() ;
        }
    }
  return (
    <header>
         {content}{children}
         <div>
          {localStorage.getItem('currentuser')}
          <button onClick={logout}>Log out</button>
         </div>
    </header>
  )
}
