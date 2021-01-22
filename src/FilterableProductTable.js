import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
class FilterableProductTable extends React.Component{
	constructor(){
		super()
		this.state={
			filterText:'',
			inStockOnly:false,
		}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(e){

		const name=e.target.name
		if (name==='text') {
			e.preventDefault()
			this.setState({filterText:e.target.value})
		}
		this.setState(function(prevState){
			prevState.inStockOnly=!prevState.inStockOnly
			return {inStockOnly:prevState.inStockOnly}
		})
		
		
	}
	render(){
		return <div>
		<SearchBar text={this.state.filterText}
		 stock={this.state.inStockOnly} onChange={this.handleChange}/>
		<ProductTable text={this.state.filterText}
		 stock={this.state.inStockOnly} onChange={this.handleChange}/>
		</div>
	}
}
export default FilterableProductTable