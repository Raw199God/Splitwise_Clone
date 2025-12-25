import { useContext } from "react";
import { usercontext } from "../contexts/usercontext";

export default function Addgroupform({setaddinggroup}) {
  const [userdata,setuserdata] = useContext(usercontext) ;
  let usersdata = JSON.parse(localStorage.getItem('usersdata')) ; 
  let groupsdata = JSON.parse(localStorage.getItem('groupsdata')) ; 
  function groupformsubmit(data) {
    let emails = (data.get('emails').split(','));
    const gname = data.get('name') ; 
    const gid = crypto.randomUUID() ;
    emails = emails.filter((email)=>{
      const ind  = usersdata.find((datauser)=>{
        return datauser.id == email ;
      }) ;
      return (ind)?true:false ;
    })
    emails.push(localStorage.getItem('currentuser')) ; 
    const emailsn = new Set(emails);
    emails = [] ;
    emailsn.forEach((e)=>{
      emails.push(e);
    })
    emails.map((email)=>{
      const ind  = usersdata.findIndex((datauser)=>{
        return datauser.id == email ;
      }) ;
      usersdata[ind].groups.push({gname,gid}) ; 
    })
    localStorage.setItem('usersdata' , JSON.stringify(usersdata)) ; 
    groupsdata.push({gid,gname,emails,expenses:[]})
    localStorage.setItem('groupsdata' , JSON.stringify(groupsdata)) ; 
    setuserdata((data)=>{
      return {...data,groups:[...data.groups,{gid,gname}]}
    })
    setaddinggroup(false);
  }
  return (
    <form action={groupformsubmit} className="addgroupform text-l">
      <div className="flex-col justify-center align-middle">
        <input type="text" name="name" className="bg-amber-200 w-80 h-10 mt-10"  required placeholder="Enter Group Name"/>
      </div>
      <div className="flex-col justify-center align-middle">
        <input type="text" name="emails" className="bg-amber-200 w-80 h-10 mt-10" required placeholder="Enter emails to invite seperated by commas"/>
      </div>
      <div className="flex justify-center overflow-hidden">
      <button type="submit" className="bg-amber-600 w-80 h-12 mt-10"> Add Group </button>
      </div>
    </form>
  );
}
