import { useContext } from "react";
import { usercontext } from "../contexts/usercontext";

export default function Addgroupform() {
  const [userdata,setuserdata] = useContext(usercontext) ;
  function groupformsubmit(data) {
    const emails = (data.get('emails').split(','));
    const gname = data.get('name') ; 
    const gid = crypto.randomUUID() ;
    console.log('hi');
    setuserdata((data)=>{
      return {...data,groups:[...data.groups,{
      gid,gname,emails
    }]}
    })
  }
  return (
    <form action={groupformsubmit} className="addgroupform text-3xl">
      <div className="flex-col justify-center align-middle">
        <div>Enter Group Name</div>
        <input type="text" name="name" className="bg-amber-200 w-100 h-30 mt-10"  required/>
      </div>
      <div className="flex-col justify-center align-middle">
        <div>Enter emails to invite seperated by commas</div>
        <input type="text" name="emails" className="bg-amber-200 w-100 h-30 mt-10" required />
      </div>
      <div className="flex justify-center">
      <button type="submit" className="bg-amber-600 h-30 w-120"> Add Group </button>
      </div>
    </form>
  );
}
