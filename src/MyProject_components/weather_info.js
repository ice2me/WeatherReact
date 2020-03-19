import React from "react"

const Weather = props => (
	<div className="infoWeath">
		{ props.city &&   //---- скрывает изначально параметры
			<div>
				<p>Location : {props.city}, {props.country}</p>
				<p>Temperature (C°) : {props.temp}</p>
				<p>Pressure (mm Hg) : {props.pressure}</p>
				<p>Wind (m/s) : {props.wind}</p>
				<p>{props.error}</p>
			</div>
		}
		<p className="error">{ props.error }</p>
	</div>
)
export default Weather;