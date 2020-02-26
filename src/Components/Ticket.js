import React, { Component } from 'react'
 class Ticket extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     
    ChangeHandler=()=>{
      this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h1 className='heading'>{this.props.name}</h1>
                <button onClick={this.ChangeHandler}>ADD</button>
                <h1 className='total'>{this.state.count}</h1>
            </div>
        )
    }
}
export default  Ticket; 