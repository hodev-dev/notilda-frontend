import React from 'react'
import { useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ListView = (props: any) => {
  const [listState, setListState] = useState([
    {
      key: "1a",
      name: "test",
    },
    {
      key: "2a",
      name: "test2",
    },
    {
      key: "1a213",
      name: "test",
    },
    {
      key: "2aasd",
      name: "test2",
    },
    {
      key: "1accxc",
      name: "test",
    },
    {
      key: "2asdaxc",
      name: "test2",
    },
    {
      key: "1asdasc",
      name: "test",
    },
    {
      key: "2asdcx",
      name: "test2",
    },
    {
      key: "1acxqaq",
      name: "test",
    },
    {
      key: "2axc6eqwe",
      name: "test2",
    },
    {
      key: "1aqw14124",
      name: "test",
    },
    {
      key: "2ajjtryu",
      name: "test2",
    },
    {
      key: "1a123rfgv",
      name: "test",
    },
    {
      key: "2axcqw43",
      name: "test2",
    },
    {
      key: "1ajkyrtjrf",
      name: "test",
    },
    {
      key: "2axcqw13412",
      name: "test2",
    },
  ]);

  const renderListItem = () => {
    return listState.map((item: any) => {
      return (
        <a key={item.key} href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2 hover:border-yellow-200"}>
          <FiFileText size="24" className="w-1/12 h-5 text-gray-100" />
          <h1 className={"w-9/12 text-gray-100"}>{item.name}</h1>
          <h1 className={"w-2/12 text-center text-gray-100"}>12</h1>
        </a>
      )
    });
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    console.log(result);
    if (!result.destination) {
      return;
    }

    const items: any = reorder(
      listState,
      result.source.index,
      result.destination.index
    );

    setListState(items);
  }

  const renderDnd = () => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listState.map((item, index) => (
                <Draggable isDragDisabled={props.isDragable} key={item.key} draggableId={item.key} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <a key={item.key} href="#" className={"flex flex-row items-center w-full h-16 border border-t-0 border-l-0 border-r-0 border-black bg-dark-2 hover:border-yellow-200"}>
                        <FiFileText size="24" className="w-1/12 h-5 text-gray-100" />
                        <h1 className={"w-9/12 text-gray-100"}>{item.name}</h1>
                        <h1 className={"w-2/12 text-center text-gray-100"}>12</h1>
                      </a>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

  return (
    <>
      {renderDnd()}
    </>
  )
}

export default ListView
