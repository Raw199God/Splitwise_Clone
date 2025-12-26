import { useContext } from "react";
import { useParams } from "react-router";
import { groupcontext } from "../contexts/modifyingexpensecontext";
import Groupbalancesentry from "./Groupbalancesentry";
export default function Groupbalances() {
    const [group,setgroup] = useContext(groupcontext) ; 
    const memberowed = {} ;
    group.emails.map((email)=>{
      memberowed[email] = 0  ;
    })
    group.expenses.map((expense)=>{
      memberowed[expense.paidby] += expense.amount ;
      let cntsplit = 0 ;
      Object.entries(expense.splitby).forEach(([e,value])=>{
          cntsplit += value?1:0 ;
      })
      Object.entries(expense.splitby).map(([member,value])=>{
        if(value){
          memberowed[member] -= (expense.amount)/(cntsplit) ;
        }
      })
    })
    console.log(memberowed);
    return (
      <div className="border-l pt-10 pl-10 flex flex-col align-middle">Group Balances {
        Object.entries(memberowed).map(([email,owed])=>{
            return <Groupbalancesentry email={email} owed={owed} key={email}/>
        })
    }
    </div>
  )
}
