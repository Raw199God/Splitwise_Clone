import { useContext } from "react";
import { usercontext } from "../contexts/usercontext";

export default function Addexpenseform({setaddingexpense}) {
  const [userdata,setuserdata] = useContext(usercontext) ;
  function expenseformsubmit(data) {
    // const emails = (data.get('emails').split(','));
    // emails.push(localStorage.getItem('currentuser')) ; 
    // const gname = data.get('name') ; 
    // const gid = crypto.randomUUID() ;
    // for(idx in emails){
    //     console.log(idx);
    // }
    // setuserdata((data)=>{
    //   return {...data,expenses:[...data.expenses,{
    //   gid,gname,emails
    // }]}
    // })
    setaddingexpense(false);
  }
  return (
    <form action={expenseformsubmit} className="addexpenseform text-3xl">
      <div className="flex-col justify-center align-middle">
        <div>Enter expense Name</div>
        <input type="text" name="name" className="bg-amber-200 w-80 h-10 mt-10"  required/>
      </div>
      <div className="flex-col justify-center align-middle">
        <div>Enter emails to invite seperated by commas</div>
        <input type="text" name="emails" className="bg-amber-200 w-80 h-10 mt-10" required />
      </div>
      <div className="flex justify-center overflow-hidden">
      <button type="submit" className="bg-amber-600 w-80 h-12"> Add expense </button>
      </div>
    </form>
  );
}
