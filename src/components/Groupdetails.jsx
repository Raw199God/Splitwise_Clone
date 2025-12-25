import { useParams } from "react-router"
import AddExpense from "./AddExpense";
import Settleup from "./Settleup";
import { useContext } from "react";
import { usercontext } from "../contexts/usercontext";
import Groupbalances from "./Groupbalances";
import { groupcontext } from "../contexts/modifyingexpensecontext";
export default function Groupdetails() {
    const params = useParams() ;
    const [userdata] = useContext(usercontext) ;
    const group = userdata.groups.find((itergrp)=>{
      return itergrp.gid == params.gid ; 
    })
  return (
    <groupcontext.Provider value={group}>
      <div className='Dashboard' >
      <div className='dashboardHeader'>
        {group?.gname} - {group?.emails.length} members
      <div>
        <AddExpense/>
        <Settleup/>
      </div>
      </div>
    </div>
    <Groupbalances/>
    </groupcontext.Provider>
  )
}
