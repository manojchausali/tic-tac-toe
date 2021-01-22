import React,{Component} from 'react'
import Name from './data.js'
import Data from './header.js'

class App extends Component{
	constructor(){
		super();
		this.state={
			loading:true,
			todo:Name,
			newItem:{
				id:'',
				name:'',
				completed:false,
			},


		}
		this.handleSubmit=this.handleSubmit.bind(this)
		this.handleNew=this.handleNew.bind(this)
	}
	componentDidMount(){
		setInterval(()=>this.setState({loading:false}),1000)
	}
	handleChange(e,id){
		const Name=e.target.value;
		const name=e.target.name;
		console.log(name)
		if(name==='edit'){

						this.setState(function(prevState) {
						const newList=prevState.todo.map(function(element){
							if(element.id===id){
								element.name=Name;
								}
							return element;
						} )

					return{todo:newList}
				})
			}
		if(name==='check'){
			console.log(id)
			this.setState(function(prevState) {
				const newList=prevState.todo.map(function(element){
					if(element.id===id){
						element.checked=!element.checked
					}
					return element;
				})
				return {todo:newList}
			
			})	
	}
	if(name==='remove'){
		console.log(id)
			this.setState(function(prevState) {
				const newList=prevState.todo.filter(function(element){
					if(element.id!==id) return element;
				})
				return {todo:newList}
			
			})	
	}
}
		
	handleNew(e){
		const todo=e.target.value;
		if(todo!==''){
			this.setState({
			newItem:{
				id:Date.now(),
				name:todo,
				completed:false,
			}
		})

		}
			}
	handleSubmit(e){
		e.preventDefault()
		const newItem=this.state.newItem
		if(newItem.todo!==''){
			const updatedTodo=[...this.state.todo,newItem]
			this.setState({todo:updatedTodo})
			this.setState({newItem:{
				id:'',
				todo:'',
				completed:false
			}})
		}
	}
	render(){
		const fn=this.handleChange.bind(this)
		const list=this.state.todo.map((objectinlist)=><Data key={objectinlist.id} data={objectinlist}
			handleChange={fn}/>)
	
	const show=this.state.loading;
	return <div>
	{show?'loading data....please wait':list}
	<form onSubmit={this.handleSubmit}>
		<input type='text' name='add' onChange={this.handleNew}/>
		<button>Add New</button>
	</form>
	</div>
	}
}	
export default App;