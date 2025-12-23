import React from 'react'
import { Link } from 'react-router'

export default function SelectorDashboard() {
  return (
    <Link to='/'><button className='bg-emerald-400 w-1/1 m-3 h-10 rounded-xl text-white font-bold'>
        Dashboard
        </button></Link>
  )
}
