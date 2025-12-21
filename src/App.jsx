import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Selector from "./components/Selector";
import Friends from "./components/Friends";
import { useState } from "react";
import { groupscontext } from "./contexts/groupscontext";
import { userscontext } from "./contexts/userscontext";
function App() {
  const [groups, setgroups] = useState([
    {
      gid: 112312313,
      gname: "delhi jaare behencho",
      members: ["rishit@gmail.com"],
    },
  ]);
  const [usersdata, setusersdata] = useState([]);
  localStorage.setItem('groups',groups) ; 
  localStorage.setItem('usersdata',usersdata) ; 
  return (
    <groupscontext.Provider value={[groups, setgroups]}>
      <userscontext.Provider value={[usersdata, setusersdata]}>
        <Header content="Your Own SplitWise" />
        <div className="layout">
          <Selector />
          <Outlet />
          <Friends />
        </div>
      </userscontext.Provider>
    </groupscontext.Provider>
  );
}

export default App;
