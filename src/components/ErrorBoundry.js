import React, { Component } from "react";


class ErrorBoundry extends Component {
    constructor(props){
        super()
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }

    render(){
        return this.state.hasError? 
        <h1>somthing went wrong, pleace contact adminstrator</h1>
        :
        (this.props.children)
    }
}

export default ErrorBoundry