import React from 'react'

const Panel = (props: any) => {
  return (
    <>
      <div className={"flex items-center h-16 bg-dark-side"}>
        {props.children}
      </div>
    </>
  )
}

export default Panel
