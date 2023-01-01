/**
 * ^USESTATE
 * digunakan untuk membuat state pada functional component
 * fungsi useState akan mereturn pasangan nilai dari state function untuk mengubah state tersebut dalam bentuk sebuah array
 * dimana item pertama merupakan state (yaah saya asumsikan disini sebagai varibel yang memiliki nilai awal. entah itu string, bool, number, obj dll)
 * item kedua merupakan fungsi (function) yang digunakan untuk memanipulasi state itu sendiri.
 * biasanya useState dideklarasikan menggunakan destructuring array : let [values, setValues] = useState('this is values')
 */

import React, { useState } from 'react'; 
import { Button, Cards } from '../components/@index';

const State = () => {
	const [ counter, setCounter ] = useState(0);
	const [ food, setFood ] = useState({
		name: [ 'Soto Betawi' ],
		val: null
	});

	const addFood = e => {
		e.preventDefault();
		e.target.reset();
		setFood({
			...food,
			name: [ ...food.name, food.val ]
		});
	};

	return (
		<>
			<h2>Counter : {counter}</h2>
			<div className={'separate spacing'}>
				<Button click={() => setCounter(counter + 1)}>👆🏼</Button>
				<Button
					click={() => setCounter(counter - 1)}
					disable={counter >= 1 ? false : true}
				>👇🏼</Button>
			</div>

			<h2>Food List</h2>
			<form onSubmit={addFood} className={'separate spacing'}>
				<Button type="submit">👊🏼</Button>
				<input
					type='text'
					placeholder='insert here'
					onChange={e => setFood({ ...food, val: e.target.value })}
				/>
			</form>
			{ food.name.map((v, i) => <Cards key={i}>{v}</Cards>) }
		</>
	);
};

export default State;