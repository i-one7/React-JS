/**
 * ^EFFECT CLEANUP FUNCTION
 * cleanup up pada useEffect bisa diasumsikan sebagai cara untuk menghentikan side effect yang tidak dibutuhkan namun terus dieksekusi. dan salah satu alasan umum useEffect menjadi tidak relevan dalah ketika unmounted.
 * contoh : kita memesan makanan dilokasi A, dan secara tiba2 kita pindah ke lokasi B. makanan tetap datang ke lokasi A sedangkan kita sudah berada di lokasi B. Sekarang untuk apa makanan itu? tentu buang-buang duid dong. sebagai konsep cleanup, kita bisa membatalkan pesanan tersebut sebelum pindah dari lokasi A ke lokasi B.
 * https://jsonplaceholder.typicode.com/users
 */

import React,{useState, useEffect} from 'react';

const Case = () => {
	const [ users, setUsers ] = useState(null);
	const Delay = t => new Promise(f => setTimeout(f, t));

	useEffect(() => {
		let load = false;
		(async () => {
			await Delay(3000);
			const g = await fetch('https://jsonplaceholder.typicode.com/users');
			const r = await g.json();
			setUsers(r);
		})();
		return () => load = !load;
	}, []);

	return (
		<>
			{ !users &&  <div>🐷 loading...</div> }
			{ users && users.map((v, k) =>  <div key={k} className='cards'>🤡 {v.name}</div>) }
		</>
	);
};

const Cleanup = () => {
	const [ show, setShow ] = useState(true);
	return (
		<>
			<h2>CleanUp Function</h2>
			<p>Try to hide components before fetch complete</p>
			<br/>
			<button onClick={() => setShow(!show)}> {show ? '🤨' : '🫣'} </button>
			<br/>
			<br/>
			{show && <Case/>}
		</>
	);
};

export default Cleanup;