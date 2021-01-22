import React from 'react'
function BoilingVerdict(props){
	if (props.temprature>100) {
		return <p>Water will boil</p>
	}
	return <p>water will not boil</p>
}
export default BoilingVerdict