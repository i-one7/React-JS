/**
 * ^USESTATE
 */

import React, { useState } from 'react';

const State = () => {
	const [ counter, setCounter ] = useState(0);
	const [ food, setFood ] = useState({
		name: [ 'ayam mati' ],
		val: null
	});
	
	const addFood = () => setFood({
			...food,
			name: [ ...food.name, food.val ]
		});

	return (
		<>
			<h1>Counter : {counter}</h1>
			<button onClick={() => setCounter(counter + 1)}> increment </button>
			<button disabled={counter <= 0 ? true : false} onClick={() => setCounter(counter - 1)} > decrement </button>

			<br />
			<br />

			<h1> Food list</h1>
			<button onClick={() => addFood()}>add</button>
			<input placeholder='food here' onChange={ e => setFood({...food, val : e.target.value})}/>
			<ol>
				{
					food.name.map((v, i) => {
						return <li key={i}>{v}</li>;
					})
				}
			</ol>
		</>
	);
};

export default State;