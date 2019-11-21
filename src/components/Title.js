import React from 'react';
import style from './Title.css';

const Title = props => 
	<div className={style.titleText}>
		<h1>{props.title}</h1>
		<li>Liczba zadan: {props.numberOfTask}</li>
	</div>

export default Title;

