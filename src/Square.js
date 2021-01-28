import React from 'react'
function Square(props){
	const style={
		height:'50px',
		width:'50px',
		background:'white',
		border:'1px solid #999',
	};
	const styleSuccess={
		height:'50px',
		width:'50px',
		background:'#999',
		border:'1px solid #999',
	}

	return <div><button id={props.id} style={props.success?styleSuccess:style}
	 value={props.value}
	 onClick={props.handleClick} >{props.value}
	</button></div>
}
export default Square