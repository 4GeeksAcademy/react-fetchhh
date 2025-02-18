import React, {useState} from "react";

import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {

	const [nuevoTodo, setNuevoTodo] = useState("Tarea Nueva");
	const [todos, setTodos] = useState(["una","y dos tareas de prueba"]);

	const handleClick = () => {
		console.log("Nueva Tarea", nuevoTodo)
		setTodos({...todos, nuevoTodo})
	}

	const deleteTodo = (indice) => {
		//todos los elementos menos el que tenga el indice que recibo
		const listaNueva = todos.filter((todo, i) => i !== indice)
		setTodos(listaNueva)
	}

	const handleChange = (event) => {
		setNuevoTodo(event.target.value);
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">
				To-do List React Fetch
			</h1>
			<div className="container">
				<div className="d-flex gap-2">
					<input type="text" className="form-control" onChange={handleChange} />
					<button onClick={handleClick} className="btn btn-primary">
						Agregar tarea
					</button>
				</div>
			</div>
			<p>Nueva tarea: {nuevoTodo}</p>
			<ul className="list-group">
				{todos.map((todo, indice) => {
					return(
						<li className="list-group-item d-flex justify-content-between align-items-center">
							{todo} <button className="btn btn-danger" onClick={() => deleteTodo(indice)}>Borrar</button>
						</li>
					)
				})}
			</ul>
		</div>
	);
};

export default Home;