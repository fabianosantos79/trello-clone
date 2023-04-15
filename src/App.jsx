import { useState } from 'react'
import './App.css'

const initialItems = [
  { id: '1', content: 'Conteúdo do card 1' },
  { id: '2', content: 'Conteúdo do card 2' },
  { id: '3', content: 'Conteúdo do card 3' }
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
      {initialColumns.map((column) => (
        <div>
          <h1>{column.name}</h1>
          <div style={{ backgroundColor: 'lightblue', width: 250, height: 500 }}>
            {column.items.map((item) => (
              <div style={{ backgroundColor: '#dddddd', width: "30" }}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
