import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TempratureInput from './tempratureInput'
function toCelcius(ferenhite){
	return(ferenhite-32)*5/9;
}
function toFerenhite(celcius){
	return (celcius*9/5)+32
}
function tryConvert(temp,convert){
	const input=parseFloat(temp);
	if (Number.isNaN(input)) {
		return ''
	}
	const output=convert(input)
	const rounded=Math.round(output*1000)/1000
	return rounded.toString()
}
class Calculator extends React.Component{
	
		constructor(props){
		super(props)
		this.state={
			temprature:'',
			scale:'c',
		}	
		
		this.handleCelcius=this.handleCelcius.bind(this)
		this.handleFerenhite=this.handleFerenhite.bind(this)
		}
		handleCelcius(e){
			this.setState({temprature:e,scale:'c'})
		}
		handleFerenhite(e){
			this.setState({temprature:e,scale:'f'})
		}
		render(){
			const scaleCheck=this.state.scale
			const temp=this.state.temprature
			const celcius=scaleCheck==='f'?tryConvert(temp,toCelcius):temp
			const ferenhite=scaleCheck==='c'?tryConvert(temp,toFerenhite):temp
		return <div>
				<TempratureInput scale='c' temprature={celcius}
				onTempChange={this.handleCelcius}/>
				<TempratureInput scale='f' temprature={ferenhite}
				onTempChange={this.handleFerenhite}/>
				<BoilingVerdict temprature={this.state.temprature} />
		</div>
	
}
}
export default Calculator