import React from 'react'
import products from './products'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
	render(){
		const text=this.props.text;
		const tick=this.props.stock;
		const product=products

		const productCategory=product.map(function(objectinlist){
			return <ProductCategoryRow category={objectinlist.category}/>
		})
		const productSports=product.map(function(objectinlist){
			if (tick===false) {
				if (text==='') {
				if(objectinlist.category==='Sporting Goods') return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>
			}
			if(text===objectinlist.name && objectinlist.category==='Sporting Goods'){
			 return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>}
			}
			if (text==='') {
				if(objectinlist.category==='Sporting Goods' &&
				 objectinlist.stocked===true) return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>
			}
			if(objectinlist.name===text && objectinlist.category==='Sporting Goods'
				&& objectinlist.stocked===true){
			 return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>}
			
		})
		/*const FilterProductSports=product.map(function(objectinlist){
			if(objectinlist.name===text && objectinlist.category==='Sporting Goods')
			 return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}

			/>
		})*/
		const productElectronics=product.map(function(objectinlist){
			if (tick===false) {
				if (text==='') {
				if(objectinlist.category==='Electronics') return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>
			}
			if(objectinlist.name===text && objectinlist.category==='Electronics'){
			 return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>}
			}
			if (text==='') {
				if(objectinlist.category==='Electronics' &&
				 objectinlist.stocked===true) return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>
			}
			if(objectinlist.name===text && objectinlist.category==='Electronics'
				&& objectinlist.stocked===true){
			 return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>}
			
		})
		const productCrockery=product.map(function(objectinlist){
			if (tick===false) {
				if (text==='') {
				if(objectinlist.category==='Crockery') return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>
			}
			if(objectinlist.name===text && objectinlist.category==='Crockery'){
			 return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>}
			}
			if (text==='') {
				if(objectinlist.category==='Crockery' &&
				 objectinlist.stocked===true) return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>
			}
			if(objectinlist.name===text && objectinlist.category==='Crockery'
				&& objectinlist.stocked===true){
			 return <ProductRow 
				name={objectinlist.name} price={objectinlist.price}
			/>}
		})


		return <div>
		<table>
		<tbody>
			<tr>
				<td>Name</td>
				<td>Price</td>
			</tr>
			</tbody>
		</table>
		<ProductCategoryRow category='Sporting Goods'/>
		{productSports}
		<ProductCategoryRow category='Electronics'/>
		{productElectronics}
		<ProductCategoryRow category='Crockery'/>
		{productCrockery}
		</div>
	}
}
export default ProductTable