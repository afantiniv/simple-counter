import React from "react";

const Seconds = (props) =>{
	return (
		/*<h1>
			{props.seconds}
		</h1>*/
        <div
			className="d-flex display-2 align-items-center justify-content-center mx-2"
			id={props.identificador}>
			{props.seconds}
		</div>
	);
}


export default Seconds;