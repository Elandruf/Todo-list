import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
	const [work, setWork] = useState('');
	const [tareas, setTareas] = useState([]);

	const handleChange = (e) => setWork(e.target.value);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (work.trim() !== "") {
				const nuevaTarea = `${tareas.length + 1}. ${work}`
				setTareas([...tareas, nuevaTarea]);
				setWork("");
			}
		}
	};

	const handleDelete = (index) => {
		const nuevasTareas = tareas.filter((_, i) => i !== index);
		const tareasRenumeradas = nuevasTareas.map((tarea, i) => `${i + 1}. ${tarea.split('. ')[1]}`);
        
        setTareas(tareasRenumeradas); 
    };
		

	return (
		<body className="fondo">
			<div className="text-center mx-1">
				<h2>To-Do List ✅</h2>

				<input
					type="text"
					id="taskInput"
					placeholder="Escribe una tarea..."
					value={work}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				<button className="btn btn-primary mx-1" >Agregar</button>

				<ul id="todo-list">
					{tareas.map((tarea, index) => (
						<li key={index} className="todo-item">
							<span>{tarea}</span>
							<button className="delete-btn" onClick={() => handleDelete(index)}>❌</button>
						</li>
					))}
				</ul>
			</div>
		</body>
	);
};

export default Home;