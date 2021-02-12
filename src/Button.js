import React from 'react'
function Button(props){
	const history=props.history;
	let show
	const move=history.map(function(item,move){
		show=move?'Go to move# '+move:'Go to start'
		return (
			<li key={move} ><button onClick={()=>props.move(move)} >{show}</button></li>
			)
	})
	/*let show=[]
	for(let i=0;i<history.length-1;i++){
		show.push(<ol><button>Go to step {i}</button></ol>)
	}*/
	return <div>
	<ol>{move}</ol>
	</div>
}
export default Button