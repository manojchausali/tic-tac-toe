import React from 'react'
import Square from './Square'

class Board extends React.Component{
	
	renderSquare(i) {
		const list=this.props.list
		let success
		list.map(function(item){
			if(i===item){
				success=true
			}
		})
		return <Square id={i} 
		value={this.props.squares[i]} success={success}
			handleClick={()=>this.props.handleClick(i)} />
	}
	render(){

	return <table>
	<tbody>
	<tr><td>{this.renderSquare(0)}</td>
	<td>{this.renderSquare(1)}</td>
	<td>{this.renderSquare(2)}</td>
	</tr>
	<tr><td>{this.renderSquare(3)}</td>
	<td>{this.renderSquare(4)}</td>
	<td>{this.renderSquare(5)}</td>
	</tr>
	<tr><td>{this.renderSquare(6)}</td>
	<td>{this.renderSquare(7)}</td>
	<td>{this.renderSquare(8)}</td>
	</tr>
	</tbody>
	</table>
	}
	
}
export default Board