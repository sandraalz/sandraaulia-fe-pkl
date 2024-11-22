import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State untuk menyimpan judul dan deskripsi tugas
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // State untuk menyimpan daftar tugas
  const [tasks, setTasks] = useState([]);

  // Fungsi untuk menambahkan tugas
  const handleAddTask = () => {
    if (title && description) {
      const newTask = {
        id: tasks.length + 1, // ID unik untuk tugas
        title: title,
        description: description,
        completed: false, // Status awal tugas adalah belum selesai
      };

      setTasks([...tasks, newTask]); // Tambahkan tugas baru ke daftar
      setTitle(''); // Kosongkan input judul
      setDescription(''); //Kosongkan input deskripsi
    }
  };

  // Fungsi untuk menandai tugas sebagai selesai
  const handleMarkAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks); // Update daftar tugas dengan status tugas yang telah selesai
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">To-Do List</h1>

      {/* Form untuk menambah tugas */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Judul Tugas"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Mengupdate state judul
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Deskripsi Tugas"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Mengupdate state deskripsi
        />
        <button onClick={handleAddTask} className="btn btn-primary">
          Tambah Tugas
        </button>
      </div>

      {/* Menampilkan daftar tugas */}
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}
          >
            <div>
              <h5 className={task.completed ? 'text-decoration-line-through' : ''}>{task.title}</h5>
              <p className={task.completed ? 'text-decoration-line-through' : ''}>{task.description}</p>
            </div>

            {/* Tombol untuk menandai tugas sebagai selesai */}
            {!task.completed && (
              <button
                onClick={() => handleMarkAsDone(task.id)}
                className="btn btn-success btn-sm"
              >
                Mark as Done
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
