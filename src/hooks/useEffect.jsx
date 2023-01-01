/**
 * ^USEEFFECT
 * ini biasa digunakan untuk menambahkan side effect kedalam function komponen.
 * penggunaanya mirip dengan lifecycle method (class component) seperti componentDidMount, componentDidUpdate & componentWillMount.
 * useEffect ini akan menerima 2 argumen berupa callback, dan array : useEffect(fun, []).
 * array pada argumen kedua useEffect biasa disebut dependency dan effect akan berpatokan pada isi dari array dependency tersebut.
 * jika : useEffect(fun, [value]), maka effect akan dijalankan ketika si value berubah.
 * jika : useEffect(fun, []), maka effect hanya akan bereaksi pada saat state/komponen dimuat pertama kali.
 * jika : useEffect(fun) tanpa array dependency, maka effect akan terus bereaksi ketika state/komponen berubah.
 * sebenarnya effect akan selalu dijalankan 1x saat komponen pertama kali di render. yang membedakan ialah pada array dependency (bisa dikatakan sebagai item yang digunakan untuk melakukan trigger ketika value dari dependency berubah, tetapi jika dependency kosong maka hanya akan dimuat sekali ketika komponen dirender).
 */

import React, { useEffect, useState } from 'react';

const Effect = () => {
	const [ count, setCount ] = useState(0);

	const time = new Date();
	const [ current, setCurrent ] = useState('');

	// panda akan muncul ketika render pertama kali
	useEffect(() => {
		console.log('🐼');
	}, []);

	// babi akan muncul ketika render pertama kali & value count berubah
	useEffect(() => {
		console.log('🐷');
	}, [ count ]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent(time.toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, [current]);

	return (
		<div>
			<h1>🕒 {current} </h1>
			<div className={'spacing'}></div>
			<button onClick={() => setCount(count + 1)}>🤏🏼{count}</button>
		</div>
	);
};

export default Effect;