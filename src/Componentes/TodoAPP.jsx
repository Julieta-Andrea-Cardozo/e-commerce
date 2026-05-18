import { useState } from 'react'

function TodoApp() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const agregar = () => {
    if (tarea.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto: tarea, completada: false }])
    setTarea('')
  }

  const toggleCompletar = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ))
  }

  const eliminar = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  const pendientes = tareas.filter(t => !t.completada).length

  return (
    <div>
      <h2>To-Do App</h2>
      <p>Tareas pendientes: {pendientes}</p>

      <input
        type="text"
        placeholder="Nueva tarea..."
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button onClick={agregar} disabled={!tarea}>
        Agregar
      </button>

      {tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        tareas.map(t => (
          <div key={t.id}>
            <span style={{ textDecoration: t.completada ? 'line-through' : 'none' }}>
              {t.texto}
            </span>
            <button onClick={() => toggleCompletar(t.id)}>
              {t.completada ? 'Deshacer' : 'Completar'}
            </button>
            <button onClick={() => eliminar(t.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  )
}

export default TodoApp