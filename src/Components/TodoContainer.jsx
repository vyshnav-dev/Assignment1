import React, { useState } from "react";
import "./TodoContainer.css";
import AddTaskForm from "./toDos/AddTaskForm";
import UpdateForm from "./toDos/UpdateForm";
import ToDo from "./toDos/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
const TodoContainer = (props) => {
  const [toDo, setToDo] = useState(props.jsonTodos);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // -------Add Task to Todo list----------

  const addTask = () => {
    if (newTask) {
      let newEntry = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      setToDo([newEntry, ...toDo]);
      setNewTask("");
    }
  };

  // -------Delete Task to Todo list----------

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // -------Completed Task mark to Todo list----------

  const markDone = (id) => {
    let completeTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setToDo(completeTask);
  };

  // -------Update Task cancel to Todo list----------

  const cancelUpdate = () => {
    setUpdateData("");
  };

  // -------Change Task to Todo list----------

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      completed: updateData.completed ? true : false,
    };
    setUpdateData(newEntry);
  };

  // -------Update Task added to Todo list----------

  const updateTask = () => {
    let filterRecord = [...toDo].filter((task) => task.id !== updateData.id);
    let UpdatedObject = [updateData, ...filterRecord];
    setToDo(UpdatedObject);
    setUpdateData("");
  };
  return (
    <React.Fragment>
      <h2 className="todo-heading">Todo List App</h2>
      <div className="container App">
        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        <ToDo
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
      </div>
    </React.Fragment>
  );
};

export default TodoContainer;
