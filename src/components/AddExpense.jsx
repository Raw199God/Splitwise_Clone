import { useState } from "react"
import AddExpensemodal from "./AddExpensemodal";

export default function AddExpense() {
    const [addingexpense ,setaddingexpense] = useState(false) ;
    function loadaddexpense(){
        setaddingexpense(true) ;
    }
  return (
    <>
      <button className="addexpense" onClick={loadaddexpense}>Add Expense</button>
      {addingexpense && <AddExpensemodal addingexpense={addingexpense} setaddingexpense={setaddingexpense}/>}
    </>
  )
}
