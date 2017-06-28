import React from 'react'

const BoilingVerdict = (props)=>{
	if(((props.temperature >= 100) && (props.tunit=='c')) || ((props.temperature >= 212) && (props.tunit == 'f'))){
		console.log(props.temperature);
		return (<p>The water boils </p>)
	} else {
		console.log('test')
		return (<p>The Water will not boil </p>)
	}

}

export default BoilingVerdict