import { useState } from 'react'
import './App.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const initialItems = [
  { id: '1', content: 'Desenhar o layout' },
  { id: '2', content: 'Codificar o sistema' },
  { id: '3', content: 'Testar e Publicar' }
]

const initialColumns = [
  {
    name: 'To Do',
    id: '123',
    items: initialItems
  }
]


function App() {

  const [columns, setColumns] = useState(initialColumns)

  return (
    <div className="App">
      <DragDropContext>
        {initialColumns.map((column) => (
          <Droppable droppableId={column.id}>
            {(provided) => (
              <div ref={provided.innerRef}>

                <h1>{column.name}</h1>
                <div style={{ backgroundColor: 'lightblue', width: 250, height: 500, padding: 10 }}>
                  {column.items.map((item, index) => (
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          style={{ backgroundColor: 'gray', color: '#fff', height: 55, marginBottom: 10, ...provided.dragHandleProps.style }}>{item.content}
                        </div>
                      )}
                    </Draggable>
                  ))
                  }
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  )
}

export default App
