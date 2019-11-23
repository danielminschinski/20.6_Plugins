import React from 'react';
import style from './Title.css';

const Title = props => 
	<div className={style.titleText}>
		<h1>{props.title}</h1>
		<p>Liczba zadan: {props.numberOfTasks}</p>
	</div>;

export default Title;
