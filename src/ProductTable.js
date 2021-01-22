import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
	render(){
		
		const products=this.props.product
		const list=[]
		let lastCategory=null
		const text=this.props.text
		const stock=this.props.stock
		const ProductFilter=products.map(function(item){
			if (item.name.indexOf(text)===-1) {
				return;
			}
			if(stock && !item.stocked){ return }

			if (item.category!==lastCategory) {
				list.push(<ProductCategoryRow key={item.category} category={item.category} />);
			}
			list.push(<ProductRow key={item.name} name={item.name} price={item.price} />);
			lastCategory=item.category;
		});
		return <div>
		<table>
		<thead>
			<tr>
				<td>Name</td>
				<td>Price</td>
			</tr>
		</thead>
		<tbody>
		{list}
		</tbody>
		</table>
		</div>
	}
}
export default ProductTable