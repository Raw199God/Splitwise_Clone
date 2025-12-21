import React, { useContext } from 'react'
import { Link } from 'react-router'
import { groupscontext } from '../contexts/groupscontext'

export default function SelectorGroups() {
  const [groups,setgroups] = useContext(groupscontext) ; 
  console.log(groups);
  return (
    <div className="selectorgroups">
        <div className='groupsheader'>Groups
        </div>

    </div>
  )
}
