import React from 'react'
function ProductRow(props){
	const name=props.product.name
	const style=props.product.stocked?name:<span style={{color:'red'}}>{name}</span>;
	return <tr>
	<td>{style}</td>
	<td>{props.product.price}</td>
	</tr>
	
	
}
export default ProductRow