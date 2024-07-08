import { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (name) => {
    const newTask = { name: name, done: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    saveTasks([...tasks, newTask]);
  };

  // Function to toggle the 'done' state of a task
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Function to save tasks to localStorage
  const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Function to load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div className="App w-full h-screen bg-[#17181f] text-white">
      <div className="h-fit w-full flex justify-center items-center bg-[#17181f]">
        {/* Added max-h-[calc(100vh - 100px)] to limit height within viewport minus header/footer */}
        <div className="w-[50%] mx-auto fixed top-4">
          <TaskForm onAdd={addTask} />
        </div>
        <div className="mt-32 min-w-[600px] overflow-y-auto">
          {/* Added margin top to separate task list from form */}
          {tasks.map((task, index) => (
            <TaskList
              key={index}
              name={task.name}
              done={task.done}
              onToggle={() => toggleTask(index)}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
