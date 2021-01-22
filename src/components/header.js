import React from 'react'

function Data(props){
	const onCompleted={
		'fontStyle':'italic',
		'textDecoration':'line-through',

	}
	return <div> <input type='checkBox' name='check' checked={props.data.checked} 
	onChange={function(e) 
	 	{return props.handleChange(e,props.data.id)}} />	

	<input style={props.data.checked?onCompleted:null} value={props.data.name} name='edit' 
	onChange={(e)=>props.handleChange(e,props.data.id)}/>

	<button  name='remove'
	onClick={(e)=>props.handleChange(e,props.data.id)}>Remove</button>
	</div>
				
				
			
			
}

export default Data;