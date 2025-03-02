import React, { Component } from "react"

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos : [],
      newTodo : ''
    }
    console.log('constructor : setting up initial binds')
  }

  componentDidMount(){
    console.log("comp did mount")

    setTimeout(() => {
      this.setState(
        {todos: ["walk daily", "read a book", "code 1 que"]
        }
      )
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Compnent did update')
    // console.log('prevprops', prevProps)
    // console.log('prevState', prevState)

    if(prevState.todos !== this.state.todos){
      console.log('updated toods', this.state.todos);
      console.log(prevState.todos);
    }
  }

  componentWillUnmount(){
    console.log("component unmount")
  }

  handleClick = () => {
    // this.setState({
    //   todos: [...this.state.todos, this.state.newTodo],
    //   newTodo : ''
    // })

    this.setState((prev) => ({
      todos: [...prev.todos, prev.newTodo],
      newTodo: ''
    }))
  }

  handleInputChange = (e)=>{
    this.setState(
      {newTodo : e.target.value}
    )
    
  }

  render(){
    return(
    <div>
      <h2>My Todo list</h2>
      <ul>
        {this.state.todos.map((list, i)=>{
          return <li key={i}>{list}</li>
        })}
      </ul>
      <input 
      type="text"
      placeholder="Enter your Task"
      value={this.state.newTodo}
      onChange={this.handleInputChange}
       />
      <button onClick={this.handleClick}>Add Task</button>
    </div>
    )
  }
}


// function TodoList(){
//   return(
//     <>
//     </>
//   )
// }


export default TodoList;