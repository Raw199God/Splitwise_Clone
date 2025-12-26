import React from 'react'

export default function Groupbalancesentry({email,owed}) {
    owed = owed.toFixed(2) ;
  return (
    <div className=" rounded-xl flex flex-col justify-center items-center m-4" >
          <div>{email}</div>
            {
                (owed < 0) ? <div className='text-s text-amber-600 font-extrabold'>{`Owes ₹ ${-owed}`}</div> : ((owed==0) ? <div className='text-s text-gray font-extrabold'>{'Settle Up'}</div>:<div className='text-s text-[#7ac033] font-extrabold'>{`Gets Back ₹ ${owed}`}</div>) 
            }
    </div>
  )
}
