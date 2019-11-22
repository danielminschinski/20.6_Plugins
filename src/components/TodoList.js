import React from 'react';
import Todo from '.Todo';
import style from './TodoList.css';

const TodoList = props =>
	<div>
		{props.data.map(todo =>
			<Todo 
				key={todo.id}
				text={todo.text}
				id={todo.id}
				removeTodo={props.removeTodo}
			/>) 
		}
	</div>
export default TodoList;

