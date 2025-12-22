import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Selector from "./components/Selector";
import Friends from "./components/Friends";
import { useState } from "react";
import { usercontext } from "./contexts/usercontext";
function fetchuserdata() {
  const currentuser = localStorage.getItem("currentuser");
  const usersdata = JSON.parse(localStorage.getItem("usersdata"));
  return (usersdata.filter((userdata) => {
    return userdata.id == currentuser;
  }))[0];
}
function App() {
  const [userdata, setuserdata] = useState(fetchuserdata());
  const currentuser = localStorage.getItem("currentuser");
  const usersdata = JSON.parse(localStorage.getItem("usersdata"));
  const newusersdata = usersdata.map((iterdata) => {
    console.log('setting new user data');
    if (iterdata.id == currentuser) {
      return userdata;
    } else {
      return iterdata;
    }
  });
  console.log(newusersdata);
  localStorage.setItem('usersdata' , JSON.stringify(newusersdata)) ;
  return (
    <usercontext.Provider value={[userdata, setuserdata]}>
      <Header content="Your Own SplitWise" />
      <div className="layout">
        <Selector />
        <Outlet />
        <Friends />
      </div>
    </usercontext.Provider>
  );
}

export default App;
