
import './App.css';
import TaskList from './TaskList';

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

export default App;
