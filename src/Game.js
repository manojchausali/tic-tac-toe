import React from 'react'
import Board from './Board'
import Button from './Button'
class Game extends React.Component{
	constructor(){
		super()
		this.state={
			history:[{
				squares:Array(9).fill(null)
			}],
			xNext:true,
			successList:[],
			success:false,
			draw:0,
			stepNumber:0,
		}
		this.handleClick=this.handleClick.bind(this)
		this.computeWinner=this.computeWinner.bind(this)
		this.handleMove=this.handleMove.bind(this)
		
		
	}
	componentDidUpdate(){
		const history=this.state.history;
		const current=history[this.state.stepNumber];
		const data=this.computeWinner(current.squares)
		if(data[0]==='win' && !this.state.success){
			this.setState({successList:data[2],success:!this.state.success})
		}
		

	}
	handleClick(i){
		const history=this.state.history.slice(0,this.state.stepNumber+1);
		const current=history[history.length-1];
		const squareS=current.squares.slice();
		const decide=this.computeWinner(squareS)
		if(decide[0]==='win' || squareS[i] || this.state.draw===4) {
			return
		}
		if(decide[0]==='draw'){
			this.setState({draw:this.state.draw+1})
			
		}
		squareS[i]=this.state.xNext?'X':'O';
		this.setState({history:history.concat({squares:squareS}),
			stepNumber:history.length,
			xNext:!this.state.xNext})
	}
	handleMove(i){
		this.setState({stepNumber:i,xNext:(i%2===0),successList:[],
			success:!this.state.success})
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
		const history=this.state.history;
		const current=history[this.state.stepNumber];
		let show=this.computeWinner(current.squares);
		let text;
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
				 squares={current.squares} handleClick={this.handleClick}/>
		<Button history={this.state.history} move={this.handleMove}/>
		</div>
	}
}
export default Game