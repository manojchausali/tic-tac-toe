import React from 'react'
const scaleNames={
	'c':'Celcius',
	'f':'Feranhite',
}
class TempratureInput extends React.Component{
	constructor(props){
			super(props)
			this.handleChange=this.handleChange.bind(this)
	}
	handleChange(e){
		console.log(e.target.value)
		this.props.onTempChange(e.target.value)
	}
	render(){
		const scale=this.props.scale;
		return <form>
			<legend>Enter Temprature in {scaleNames[scale]}</legend>
			<input type='text' value={this.props.temprature} onChange={this.handleChange}/>
			</form>
	}
}
	
export default TempratureInput