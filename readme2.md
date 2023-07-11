to create a new application  or project what you need to do is npx create-react app then the name you want to give to yoir app

to run your app all you need to do is to type npm start


after creating a react project delete things we dont need in the cause of our project mainly the default codes  app.css, app.js, the react logo and app.test.js

at the cause of this project we installed bootstrap by typing  npm install --save bootstrap  
this is the link  https://reactstrap.github.io/?path=/story/home-installation--page

then we also need to install some fontawesome  by typing 

or Free icons, you can add either -- or both -- of these styles:
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons

And lastly, install the Font Awesome React component:
npm i --save @fortawesome/react-fontawesome@latest

 then to use it we need to go the link of add some icons button from the link provided below where we need to be is at add individual icon explictly 
this is the link  https://fontawesome.com/docs/web/use-with/react/



we are going to import react to our project by typing
import React, {useState} from 'react';

By importing React and useState, this code snippet indicates that the component will use React features and specifically use the useState hook to manage state within the component. State is used to store and manage data that can change over time, and the useState hook is the primary way to add state to functional components in React.

Once imported, you can use React and useState in your component to build dynamic and interactive user interfaces.



importing bootstrap by typing  import "bootstrap/dist/css/bootstrap.main.css"

The import statement you provided imports a CSS file from the Bootstrap library. The path you provided, "bootstrap/dist/css/bootstrap.main.css", suggests that it is looking for a file named bootstrap.main.css within the css folder of the bootstrap module.


also import fontawesome  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


EXPLAINING SOME CODE WRITTEN
    codes passed in the add task input
    <input value={newTask}>: This is an input element in an HTML form. The value attribute sets the initial value of the input field. In this case, the newTask variable is being used to set the initial value.

    onChange={(e) => setTask(e.target.value)}: This is an event handler attached to the onChange event of the input element. It's a callback function that will be executed whenever the value of the input field changes. The function receives an event object as a parameter, which represents the event being triggered.

    Inside the event handler, setTask(e.target.value) is called. It suggests that there is a state variable called task, and setTask is a function used to update its value. e.target.value retrieves the current value of the input field, and it is being passed as an argument to setTask. By doing this, the state variable task will be updated with the new value entered in the input field.

Overall, this code snippet sets up an input field with an initial value and an event handler that captures changes made to the input field and updates a state variable task with the new value. The onChange event triggers the setTask function, allowing you to perform additional logic or update other parts of your application based on the new value entered by the user.


DEFINITION OF ALL THE CODES WRITTEN 
Sure! I will explain each line of code in the given JavaScript file.

```javascript
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setTask] = useState('');
  const [updateDate, setUpdateDate] = useState('');
```
- The code starts with importing necessary modules and components. `React` and `useState` are imported from the 'react' library. The line `import "bootstrap/dist/css/bootstrap.min.css"` imports the Bootstrap CSS styles. The `FontAwesomeIcon` component is imported from the '@fortawesome/react-fontawesome' library. `faCircleCheck`, `faPen`, and `faTrashCan` icons are imported from the '@fortawesome/free-solid-svg-icons' library.
- The function `App()` is declared as the main component of the application. It uses React hooks to create and manage state variables.
- `toDo` state is created using the `useState` hook. It initializes an empty array, which will store the todo list tasks.
- `newTask` state is created to store the value of the input field for adding new tasks.
- `updateDate` state is created to store the task data that is being updated.
```javascript
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        status: false
      };
      setToDo([...toDo, newEntry]);
      setTask('');
    }
  };
```
- The `addTask` function is defined to add a new task to the todo list.
- It checks if `newTask` has a value (i.e., the input field is not empty).
- If the input field is not empty, a new entry is created with a unique `id`, `title` (from `newTask`), and an initial `status` of `false`.
- The new entry is added to the `toDo` array using the spread operator (`...`), and the `toDo` state is updated with the new array.
- Finally, the `newTask` state is reset to an empty string.
```javascript
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks);
  };
```
- The `deleteTask` function is defined to remove a task from the todo list based on its `id`.
- It uses the `filter` method to create a new array (`newTasks`) that includes all tasks except the one with the specified `id`.
- The `toDo` state is updated with the new array (`newTasks`).
```javascript
  const markTask = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status });
      }
      return task;
    });
    setToDo(newTask);
  };
```
- The `markTask` function is defined to toggle the status (completed/uncompleted) of a task based on its `id`.
- It uses the `map` method to iterate over the `toDo` array and create a new array (`newTask`).
- If the `id` of the current task matches the specified `id`, its `status` is inverted using the `!` operator.
- The updated task is returned using the spread operator (`...`) and added to the new array (`newTask`).
- The `toDo` state is updated with the new array.
```javascript
  const cancelUpdateTask = () => {
    setUpdateDate('');
  };
```
- The `cancelUpdateTask` function is defined to cancel the task update operation.
- It resets the `updateDate` state to an empty string.
```javascript
  const changeUpdateTask = (e) => {
    let newEntry = {
      id: updateDate.id,
      title: e.target.value,
      status: updateDate.status ? true : false
    };
    setUpdateDate(newEntry);
  };
```
- The `changeUpdateTask` function is defined to handle changes in the input field when updating a task.
- It creates a new object (`newEntry`) with the same `id` and `status` as the current `updateDate`, but the `title` is set to the value of the input field (`e.target.value`).
- The `updateDate` state is updated with the new object.
```javascript
  const updateChangeTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateDate.id);
    let updateRecords = [...filterRecords, updateDate];
    setToDo(updateRecords);
    setUpdateDate('');
  };
```
- The `updateChangeTask` function is defined to update a task with the modified details.
- It creates a copy of the `toDo` array using the spread operator (`[...toDo]`).
- It filters out the task with the same `id` as `updateDate.id` from the copied array and stores it in `filterRecords`.
- The `updateDate` task is added to the filtered array (`filterRecords`) using the spread operator, and the result is stored in `updateRecords`.
- The `toDo` state is updated with the `updateRecords` array, and the `updateDate` state is reset to an empty string.
```javascript
  return (
    <div className="container App">
      <h1>Welcome to to-do list (ReactJs)</h1>
      <br />
      {updateDate && updateDate.title ? (
        <>
          <div className='row'>
            <div className='col'>
              <input
                value={updateDate && updateDate.title}
                onChange={(e) => changeUpdateTask(e)}
                className='form-control form-control-lg'
                placeholder='Update Task'
              ></input>
            </div>
            <div className='col-auto'>
              <button onClick={updateChangeTask} className='btn btn-outline-secondary'>
                Update task
              </button>
            </div>
            <div className='col-auto'>
              <button onClick={cancelUpdateTask} className='btn btn-secondary'>
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          <div className='row'>
            <div className='col'>
              <input
                value={newTask}
                onChange={(e) => setTask(e.target.value)}
                className='form-control form-control-lg'
                placeholder='Add Task'
              ></input>
            </div>
            <div className='col-auto'>
              <button onClick={addTask} className='btn btn-outline-secondary'>
                Add task
              </button>
            </div>
          </div>
          <br />
        </>
      )}
      {toDo && toDo.length ? '' : 'No task...'}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .
