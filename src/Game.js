import React from 'react'
import Board from './Board'
class Game extends React.Component{
	constructor(){
		super()
		this.state={
			squares:Array(9).fill(null),
			xNext:true,
			successList:[],
			success:false,
			draw:0,
		}
		this.handleClick=this.handleClick.bind(this)
		this.computeWinner=this.computeWinner.bind(this)
		
		
	}
	componentDidUpdate(){
		const data=this.computeWinner(this.state.squares)
		if(data[0]==='win' && !this.state.success){
			this.setState({successList:data[2],success:!this.state.success})
		}
		

	}
	handleClick(i){

		const squareS=this.state.squares.slice();
		const decide=this.computeWinner(squareS)
		if(decide[0]==='win' || squareS[i] || this.state.draw===4) {
			return
		}
		if(decide[0]==='draw'){
			this.setState({draw:this.state.draw+1})
			
		}
		squareS[i]=this.state.xNext?'X':'O';
		this.setState({squares:squareS,xNext:!this.state.xNext})
	}
	computeWinner(squares){
		
		const list=[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
		]
		let newList1=[];
		let newList2=[];
		for(let i=0;i<list.length;i++){
			const [a,b,c]=list[i]
			
			if(squares[a] && squares[a]===squares[b] 
				&& squares[a]===squares[c]){ 
				newList1.push('win',squares[a],list[i])
				return newList1
			}
			
			else if((squares[a] && squares[c] && squares[a]===squares[b]
			 && squares[a]!==squares[c])
				|| (squares[a] && squares[a]!==squares[b] && 
					squares[a]===squares[c] && squares[b])){
				newList2.push('draw',list[i])
			//console.log(list[i],'from draw')
				
			}
			
		}
		return newList2;
	}
	render(){
		let show=this.computeWinner(this.state.squares)
		let text;
		let list
		if(show[0]==='win'){
			text='Winner is: '+show[1]
		}
		else if(this.state.draw===4){
			text='Match Drawn'
		}
		else
			text='Next player: '+(this.state.xNext?'X':'O')
		let ccc
		if(this.state.success){
			ccc=this.state.successList
		}
		//console.log(this.state.draw)
		return <div>
		{text}
		<Board  list={this.state.successList} success={this.state.success}
				 squares={this.state.squares} handleClick={this.handleClick}/>
		</div>
	}
}
export default Game