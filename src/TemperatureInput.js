import React, {Component} from 'react'
import BoilingVerdict from './BoilingVerdict.js'

class TemperatureInput extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		
	}

	handleChange(event) {
		this.props.onChange(event.target.value)

	}

	render(){
		var value = this.props.temperature
		var tunit = this.props.scale
		console.log(value);
		console.log(tunit);
		return (
			<div>
				<label> Enter Temeperature: </label>
				<input placeholder={tunit} value= {value} onChange = {this.handleChange}/>
				<BoilingVerdict tunit = {tunit} temperature = {value}/>
			</div>

			
			)
	}
}

export default TemperatureInput