import React, { useEffect, useState } from "react";
import Seconds from "./seconds.jsx";
import ReactDOM from "react-dom";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);
	useEffect(()=>{
		var interval = setInterval(()=>{
			setSeconds(seconds+1); 
			let tiempo = seconds;
			ReactDOM.render(
				(tiempo % 10).toString(),
				document.getElementById("primer")
			);
			tiempo = Math.floor(tiempo / 10); 
			ReactDOM.render(
				(tiempo % 10).toString(), 
				document.getElementById("segundo")
			);
			tiempo = Math.floor(tiempo / 10);
			ReactDOM.render(
				(tiempo % 10).toString(),
				document.getElementById("tercer")
			);
			tiempo = Math.floor(tiempo / 10);
			ReactDOM.render(
				(tiempo % 10).toString(),
				document.getElementById("cuarto")
			);
			tiempo = Math.floor(tiempo / 10);
			ReactDOM.render(
				(tiempo % 10).toString(),
				document.getElementById("quinto")
			);
			tiempo = Math.floor(tiempo / 10);
			ReactDOM.render(
				(tiempo % 10).toString(),
				document.getElementById("sexto")
			);
			console.log(seconds);
		}, 1000);
		return ()=>clearInterval(interval);
	},[seconds])
	
	return (
		<div className="container rounded fondo d-flex justify-content-center border border-2">
			<Seconds seconds={<h1>Tiempo</h1>} />
			<Seconds seconds="0" identificador="sexto" />
			<Seconds seconds="0" identificador="quinto" />
			<Seconds seconds="0" identificador="cuarto" />
			<Seconds seconds="0" identificador="tercer" />
			<Seconds seconds="0" identificador="segundo" />
			<Seconds seconds="0" identificador="primer" />
		</div>
	)
	
};




export default Home;
