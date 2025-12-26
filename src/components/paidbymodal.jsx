import { useContext } from "react"
import { groupcontext, paidbycontext } from "../contexts/modifyingexpensecontext"

export default function Paidbymodal() {
  const [paidby,setpaidby] = useContext(paidbycontext) ;
  const [group,setgroup] = useContext(groupcontext) ;
  console.log(group);
  return (
      <div className='bg-[#f6f1ba] w-80 h-100 m-10 flex flex-col justify-evenly items-center ' onClick={(e)=>{e.stopPropagation()} }>
      {
        group.emails.map((email)=>{
          // return <option value={email}> {email}</option>
          return (
            <button onClick={()=>{setpaidby(email)}} className="w-3/5 h-10 bg-blue-200 rounded-xl"> {email} </button>
          )
        })
      }
      </div>
  )
}
