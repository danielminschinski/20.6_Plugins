import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.passClickedItem = this.passClickedItem.bind(this);
	}
	
	passClickedItem(clickedItem){
		this.props.onClick(clickedItem);
	}
	
	render() {
		const singleTaskNames = this.props.tasks.map(singleTask => {
			return (
				<div className={style.TodoListStyle}>
					<li key={singleTask.id} onClick={() => this.passClickedItem(singleTask.id)}>
					{singleTask.text}
					</li>
				</div>
			)	
		});
		return (
			<div>
				<h3>Zadania</h3>
					{singleTaskNames}	
			</div>
		)
	}
}
export default TodoList;
