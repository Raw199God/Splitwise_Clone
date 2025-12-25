import AddExpense from "./AddExpense";
import Friends from "./Friends";
import Settleup from "./Settleup";

export default function Dashboard() {
  return (
    <>
    <div className='Dashboard' >
      <div className='dashboardHeader'>
        Dashboard
      <div>
      </div>
      </div>
      <div className='owecontainer'>
      <div style={{borderRight:'solid 1px black'}}>
        YOU OWE
      </div>
      <div style={{borderLeft:'solid 1px black'}}>YOU ARE OWED</div>
      </div>
    </div>
    <Friends/>
    </>
  )
}
