import React from 'react'
import { FiFolder, FiSearch, FiBookmark, FiCodesandbox, FiTrash2, FiLink2 } from 'react-icons/fi';

const Nav = () => {
  return (
    <>
      <div className={"sticky top-0 flex w-full p-2 bg-dark-1 h-18"}>
        <div className={"flex items-center justify-center w-12 h-12 p-5 font-bold text-center bg-red-600 rounded-full"}>
          fa
        </div>
        <div className={"flex flex-col"}>
          <div className={"w-full ml-5 font-semibold text-gray-300"}>hodev</div>
          <div className={"w-full ml-5 font-semibold text-gray-400"}>hodev.dev@gmail.com</div>
        </div>
      </div>
      <div className="sticky top-0">
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiSearch size="24" className="w-1/6 h-5 text-purple-200" />
          <h1 className={"w-4/6 text-purple-200"}>Search</h1>
        </a>
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiFolder size="24" className="w-1/6 h-5 text-yellow-200" />
          <h1 className={"w-4/6 text-yellow-200"}>Notes</h1>
        </a>
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiBookmark size="24" className="w-1/6 h-5 text-green-200" />
          <h1 className={"w-4/6 text-green-200"}>Important</h1>
        </a>
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiCodesandbox size="24" className="w-1/6 h-5 text-blue-200" />
          <h1 className={"w-4/6 text-blue-200"}>Safe</h1>
        </a>
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiLink2 size="24" className="w-1/6 h-5 text-orange-200" />
          <h1 className={"w-4/6 text-orange-200"}>Shared Link</h1>
        </a>
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiTrash2 size="24" className="w-1/6 h-5 text-red-200" />
          <h1 className={"w-4/6 text-red-200"}>Trash</h1>
        </a>
      </div>
    </>
  )
}

export default Nav
