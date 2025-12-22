import { useContext } from 'react'
import { Link } from 'react-router'
import { usercontext } from '../contexts/usercontext'
import Addgroup from './Addgroup';
export default function SelectorGroups() {
  const [userdata,setuserdata] = useContext(usercontext) ;
  return (
    <div className="selectorgroups">
        <div className='groupsheader'>Groups
          <Addgroup/>
        </div>
        {
          userdata.groups?.map((group)=>{
            return <Link to = {`/groups/${group.gid}`} key={group.gid}>
        <button>
          {group.gname}
        </button>
        </Link >
          })
        }
    </div>
  )
}
