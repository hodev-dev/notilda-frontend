import React, { useState } from 'react'
import { FiFilePlus, FiFolderPlus, FiLock, FiMove } from 'react-icons/fi';
import ListView from '../components/ListView';
import Nav from "../components/Nav";
import Panel from "../components/Panel";
import IconButton from "../components/IconButton";

const Home = () => {
  const [isDragable, setIsDragable] = useState(false);

  const toggleDrag = () => {
    setIsDragable(!isDragable);
  }

  return (
    <div className={"flex flex-auto max-h-screen"}>
      <div className={"w-2/12 min-h-screen overflow-y-scroll bg-dark-side"}>
        <Nav />
      </div>
      <div className={"w-8/12 min-h-screen overflow-y-scroll bg-dark-main"}>
        <div className={"sticky top-0 flex flex-col w-full h-auto bg-dark-2"}>
          <h1 className={"p-4 text-6xl leading-none text-yellow-200"}>Notes</h1>
          <div className={"flex items-center w-full h-1 bg-yellow-200"}></div>
          <Panel>
            <IconButton className={"ml-2"}>
              <FiFolderPlus size={24} />
            </IconButton>
            <IconButton className={"ml-2"}>
              <FiFilePlus size={24} />
            </IconButton>
            <IconButton className={"ml-2"}>
              <FiLock size={24} onClick={toggleDrag} />
            </IconButton>
          </Panel>
        </div>
        <ListView isDragable={isDragable} />
      </div>
      <div className={"w-2/12 min-h-screen overflow-y-scroll bg-dark-side"}>
        <div className={"w-full h-64 bg-red-700"}>test</div>
      </div>
    </div>
  )
}

export default Home
