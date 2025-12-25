import { useParams } from "react-router"
import AddExpense from "./AddExpense";
import Settleup from "./Settleup";
import Groupbalances from "./Groupbalances";
import { groupcontext } from "../contexts/modifyingexpensecontext";
export default function Groupdetails() {
    const params = useParams() ;
    const groupsdata = JSON.parse(localStorage.getItem('groupsdata'));
    // console.log(groupsdata);
    const group = groupsdata.filter((itergrp)=>{
      return itergrp.gid == params.gid ; 
    })[0] ;
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
