
import './App.css'


const TODO_LIST = [

  {id: 1, text:"Dormir", completed: false},
  {id: 2, text:"Tarea 2", completed: true},
  {id: 3, text:"Tarea 3", completed: true},
  {id: 4, text:"Tarea 4", completed: false},
  {id: 5, text:"Tarea 5", completed: true},

]

function App() {



  return (
    <>
      <h1 className='todo-list-tile'> 
        TODO LIST REACT:
      </h1>
      <hr />
      <div className="input-container">
        <label htmlFor="">Agregar tarea:</label>
        <input type="text" />
      </div>

      <div className="todo-list-container">

        <ul className="todo-list">
          
          {
             TODO_LIST.map( (todo) => {

                  return(

                    <li className="todo-item">
            
                    <div className="todo-left">
                      <input type="checkbox" className='todo-checkbox'/>
                      <span className='todo-item'>
                        {todo.text}
                      </span>
                    </div>
        
                    <button className="todo-delete">❌</button>
        
                  </li>


                  )

             } )


          }

         
          
        </ul>


      </div>

    </>
  )
}

export default App
