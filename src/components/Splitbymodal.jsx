import React, { useContext } from 'react'
import { groupcontext, splitbycontext } from '../contexts/modifyingexpensecontext'
import Selectsplitby from './Selectsplitby';

export default function Splitbymodal() {
  const [splitby,setsplitby] = useContext(splitbycontext) ;
  const group = useContext(groupcontext) ;
  return (
    <div className='bg-[#f6f1ba] w-80 h-100 m-10' onClick={(e)=>{e.stopPropagation()}}>
      {
        group.emails.map((email)=>{
          return (
            <Selectsplitby email = {email} key={email}/>
          )
        })
      }
    </div>
  )
}
