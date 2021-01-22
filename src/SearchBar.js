import React from 'react'
function SearchBar(props){
	return <div>
			<fieldset><legend>Search a product:</legend>
			<input type='text' name='text' value={props.text} 
			onChange={(e)=>props.onChange(e)}/><br/>
			</fieldset>
			<input type='checkbox' name='check'
			onChange={(e)=>props.onChange(e)}/>show only products in stock
	</div>
}
export default SearchBar