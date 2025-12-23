import { useContext } from 'react'
import { Link } from 'react-router'
import { usercontext } from '../contexts/usercontext'
import Addgroup from './Addgroup';
export default function SelectorGroups() {
  const [userdata] = useContext(usercontext) ;
  return (
    <div className="selectorgroups border-t-2 border-b-2">
        <div className='groupsheader'>Groups
          <Addgroup/>
        </div>
        {
          userdata.groups?.map((group)=>{
            return <Link to = {`/groups/${group.gid}`} key={group.gid}>
        <button className='bg-blue-400 w-23 m-3 h-10 text-xs rounded-xl text-white font-bold'>
          {group.gname}
        </button>
        </Link >
          })
        }
    </div>
  )
}
