import React from 'react'
function ProductRow(props){
	return <table>
	<tbody>
	<tr>
	<td>{props.name}</td>
	<td>{props.price}</td>
	</tr>
	</tbody>
	</table>
	
}
export default ProductRow