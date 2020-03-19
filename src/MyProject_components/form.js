import React from "react"

const Form  = props => (
	<form onSubmit={props.weatherMethod}>
		<input type="text" name="city" placeholder="Город"/>
		<button>Get to know</button>
	</form>
)

export default Form;
