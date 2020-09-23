import React from 'react'
import { FiFileText, FiFolder, FiSearch } from 'react-icons/fi';
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className={"flex flex-auto max-h-screen"}>
      <div className={"w-2/12 min-h-screen overflow-y-scroll bg-dark-side"}>
        <Nav />
      </div>
      <div className={"w-8/12 min-h-screen overflow-y-scroll bg-dark-main"}>
        <div className={"sticky top-0 flex items-center w-full h-32 bg-dark-2"}>
          <h1 className={"p-2 ml-12 text-6xl leading-none text-yellow-200"}>Notes</h1>
        </div>
        <div className={"flex items-center w-full h-2 bg-yellow-200"}></div>
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiFolder size="24" className="w-1/12 h-5 text-gray-100" />
          <h1 className={"w-9/12 text-gray-100"}>Folder</h1>
          <h1 className={"w-2/12 text-center text-gray-100"}>34</h1>
        </a>
        <a href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2"}>
          <FiFileText size="24" className="w-1/12 h-5 text-gray-100" />
          <h1 className={"w-9/12 text-gray-100"}>Essay For Mechanical Engineering</h1>
          <h1 className={"w-2/12 text-center text-gray-100"}>12</h1>
        </a>
      </div>
      <div className={"w-2/12 min-h-screen overflow-y-scroll bg-dark-side"}>
        <div className={"w-full h-64 bg-purple-700"}>test</div>
      </div>
    </div>
  )
}

export default Home
