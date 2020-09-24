import React from 'react'
import { FiMove } from 'react-icons/fi'

const IconButton = (props: any) => {
  return (
    <>
      <button className={props.className + ' ' + "flex items-center justify-center w-12 h-12 text-yellow-200 bg-dark-2"}>
        {props.children}
      </button>
    </>
  )
}

export default IconButton
