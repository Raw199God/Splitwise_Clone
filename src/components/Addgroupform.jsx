import { useContext } from "react";
import { usercontext } from "../contexts/usercontext";

export default function Addgroupform({setaddinggroup}) {
  const [userdata,setuserdata] = useContext(usercontext) ;
  let usersdata = JSON.parse(localStorage.getItem('usersdata')) ; 
  function groupformsubmit(data) {
    let emails = (data.get('emails').split(','));
    emails.push(localStorage.getItem('currentuser')) ; 
    const gname = data.get('name') ; 
    const gid = crypto.randomUUID() ;
    emails = emails.filter((email)=>{
      const ind  = usersdata.find((datauser)=>{
        return datauser.id == email ;
      }) ;
      return (ind)?true:false ;
    })
    emails.map((email)=>{
      const ind  = usersdata.findIndex((datauser)=>{
        return datauser.id == email ;
      }) ;
      usersdata[ind].groups.push({gid,gname,emails}) ; 
    })
    localStorage.setItem('usersdata' , JSON.stringify(usersdata)) ; 
    setuserdata((data)=>{
      return {...data,groups:[...data.groups,{
      gid,gname,emails
    }]}
    })
    setaddinggroup(false);
  }
  return (
    <form action={groupformsubmit} className="addgroupform text-3xl">
      <div className="flex-col justify-center align-middle">
        <div>Enter Group Name</div>
        <input type="text" name="name" className="bg-amber-200 w-80 h-10 mt-10"  required/>
      </div>
      <div className="flex-col justify-center align-middle">
        <div>Enter emails to invite seperated by commas</div>
        <input type="text" name="emails" className="bg-amber-200 w-80 h-10 mt-10" required />
      </div>
      <div className="flex justify-center overflow-hidden">
      <button type="submit" className="bg-amber-600 w-80 h-12"> Add Group </button>
      </div>
    </form>
  );
}
