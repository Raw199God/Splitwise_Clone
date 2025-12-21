import React from 'react'

export default function Header({content,children}) {
  return (
    <header> {content}{children} </header>
  )
}
