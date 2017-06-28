import React, {Component} from 'react'
import TemperatureInput from './TemperatureInput.js'

function tryConvert (temperature, tunit) {
	var tryNumber = Number(temperature)
	if(isNaN(tryNumber)) {
		return "You Suck"
	} else {
		if(tunit == 'f') {
			var convertedNumber = (temperature - 32) * 5/ 9;
		}else if(tunit == 'c'){
			var convertedNumber = (temperature * 9 /5) + 32;
		}
		return convertedNumber;
	}
}


class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {temperature: '', scale: ''};

		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature: temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature: temperature});
	}


	render(){
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		if(scale == 'f') {
			var ctemp = tryConvert(temperature, 'f');
			var ftemp = temperature;
			console.log(ctemp);
		} else if (scale == 'c') {
			var ftemp = tryConvert(temperature, 'c');
			var ctemp = temperature;
			console.log(ftemp);
		}

		return (
			<div>
				<TemperatureInput scale = "f" temperature = {ftemp} onChange = {this.handleFahrenheitChange}/>


				<TemperatureInput scale = "c" temperature = {ctemp} onChange = {this.handleCelsiusChange}/>
			</div>
		)
	}
}

export default Calculator