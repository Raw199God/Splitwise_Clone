import { useContext } from "react";
import { useParams } from "react-router";
import { usercontext } from "../contexts/usercontext";

export default function Groupbalances() {
    const [userdata] = useContext(usercontext) ; 
    const params = useParams() ;
    const groupsdata = JSON.parse(localStorage.getItem('groupsdata'));
    const group = groupsdata.filter((itergrps)=>{
       return itergrps.gid == params.gid ;
    })[0]
  return (
    <div className="border-l pt-10 pl-10 flex flex-col align-middle">Group Balances {
        group.emails.map((email)=>{
            return (email!=localStorage.getItem('currentuser')) && <div className="bg-[#3398c0] h-10 rounded-xl flex justify-center items-center m-4" key={email}>{email}</div>
        })
    }
    </div>
  )
}
