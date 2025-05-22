import React, {useState, useEffect, useRef} from 'react';
import './App.css';



function App() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const editInputRef = useRef(null)


  useEffect(() => {
    fetch('https://devtasks-backend-rytz.onrender.com/tasks')
    .then(res => res.json())
    .then(data => setTasks(data));
  }, []);

  const handleAddTask = () => {
    if(!newTitle.trim()) return;
  
    fetch('https://devtasks-backend-rytz.onrender.com/tasks', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({title: newTitle})
    })
    .then(res => res.json())
    .then(task => {
      setTasks(prev => [...prev,task]);
      setNewTitle('');
    });
  };

  const handleDelete = (id) => {
fetch(`https://devtasks-backend-rytz.onrender.com/tasks/${id}`, {
  method: 'DELETE'
}).then(() => {
  setTasks(prev => prev.filter(task => task._id !==id));
});
  };

  const handleToggleCompleted = (id, currentStatus) => {
    fetch(`https://devtasks-backend-rytz.onrender.com/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({completed: !currentStatus})
    }).then(res => res.json()
  .then( task => {
    setTasks(prev => 
      prev.map(t => t._id === task._id ? task : t)
    );
  }));
  };

    const saveEdit = (id, editedTitle) => {
    fetch(`https://devtasks-backend-rytz.onrender.com/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({title: editedTitle})
    }).then(res => res.json()
  .then( task => {
    setTasks(prev => 
      prev.map(t => t._id === task._id ? task : t)
    );
    setEditingId(null);
    setEditedTitle('');

  }));
  };

const filteredTasks = tasks.filter(task => {
  if (selectedFilter === 'all') return true;
  if (selectedFilter === 'pending') return !task.completed;
  if (selectedFilter === 'completed') return task.completed;

  return true;
});

useEffect(() => {
  if (editingId) {
    editInputRef.current?.focus();
  }
}, [editingId]);


  return (
<div className="app-container">
  <h1 className="app-title">
    DevTasks
  </h1>
   <div className="form">
  <input
    placeholder="New Task"
    value={newTitle}
    onChange={(e) => setNewTitle(e.target.value)}
  />
  <button
    onClick={handleAddTask}
  >
    Add
  </button>
</div>
<div className="filters">
  <button
    onClick={() => setSelectedFilter('all')}
    className={`filter-btn ${selectedFilter === 'all' ? 'filter-active-all' : 'filter-all'}`}
  >
    All
  </button>

  <button
    onClick={() => setSelectedFilter('pending')}
    className={`filter-btn ${selectedFilter === 'pending' ? 'filter-active-pending' : 'filter-pending'}`}
  >
    Pending
  </button>

  <button
    onClick={() => setSelectedFilter('completed')}
    className={`filter-btn ${selectedFilter === 'completed' ? 'filter-active-completed' : 'filter-completed'}`}
  >
    Completed
  </button>
</div>

<ul className="task-list">
  {filteredTasks.map(task => (
    <li key={task._id} className="task-item">      
    <div className="task-left">
        <button
          onClick={() => handleToggleCompleted(task._id, task.completed)}
        >
          {task.completed ? '✅' : '⬜'}
        </button>

        {editingId === task._id ? (
          <>
            <input
            ref={editInputRef}
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button
              onClick={() => saveEdit(task._id, editedTitle)}
            >
              💾
            </button>
          </>
        ) : (
          <>
            <span className={task.completed ? 'done' : ''}>
  {task.title}
</span>

<button
  onClick={() => {
    setEditingId(task._id);
    setEditedTitle(task.title);
  }}
  className="edit-button"
>
  ✏️
</button>

          </>
        )}
      </div>
<div className='task-buttons'>

<button onClick={() => handleDelete(task._id)}>
  🗑
</button>
        </div>
    </li>
  ))}
</ul>

   </div>
  );
}

export default App;
