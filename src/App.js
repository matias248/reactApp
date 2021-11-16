
import './App.css';
import {Component} from 'react'
import TaskList from './TaskList';

/* v1
function App() {
  const tasks =  [
    { id: 1, label:'Acheter du lait', isDone:true},
    { id: 1, label:'Acheter du lait', isDone:false}
  ]
  return (
    <div  >
      <h1>
        Tâches
      </h1>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}
*/
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextId: 3,
      tasks: [
        {id:1, label:'Acheter du lait', isDone:true},
        {id:2,label:'Acheter du kish kishen',isDone:false}
      ]
    }
  }
  render () {
    return (
      <div>
        <h1>
          Tâches
        </h1>
        <TaskList tasks={this.state.tasks}></TaskList>
        <button onClick={() => 
          { const newTask = {
            id: this.state.nextId,
            label: 'Nouvelle tâche'
          }
          const newState = { 
            nextId:this.state.nextId + 1,
            tasks: [...this.state.tasks,newTask]
          }
          this.setState( newState)
          }
          }> Ajouter une tâche</button>
      </div>
    )
  }
}

export default App;
