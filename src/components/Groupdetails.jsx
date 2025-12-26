import { useParams } from "react-router"
import AddExpense from "./AddExpense";
import Settleup from "./Settleup";
import Groupbalances from "./Groupbalances";
import { groupcontext } from "../contexts/modifyingexpensecontext";
import Expense from "./Expense";
import { useState } from "react";
export default function Groupdetails() {
    const params = useParams() ;
    const groupsdata = JSON.parse(localStorage.getItem('groupsdata'));
    const [group,setgroup] = useState(groupsdata.filter((itergrp)=>{
      return itergrp.gid == params.gid ; 
    })[0]) ;
    const index  = groupsdata.findIndex((itergrp)=>{
      return itergrp.gid == group.gid ;
    })
    groupsdata[index] = group ;
    localStorage.setItem('groupsdata' , JSON.stringify(groupsdata)) ; 
  return (
    <groupcontext.Provider value={[group,setgroup]}>
      <div className='Dashboard' >
      <div className='dashboardHeader'>
        {group?.gname} - {group?.emails.length} members
      <div>
        <AddExpense/>
        <Settleup/>
      </div>
      </div>
      {
        group.expenses.map((expense)=>{
          return (
            <Expense expense ={expense} key={expense.expenseid}/>
          )
        })
      }
    </div>
    <Groupbalances/>
    </groupcontext.Provider>
  )
}
