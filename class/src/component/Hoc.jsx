
import React from "react";

const withLoading = (WrappedCompo) =>{
  return class extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        loading: true
      }
    }
    componentDidMount(){
      setTimeout(() => {
        this.setState({loading: false})
      }, 2000);
    }

    render(){
      if(this.state.loading){
        return <h4>loading....</h4>
      }

      return <WrappedCompo {...this.props}></WrappedCompo>
    }
  }
}


export default withLoading