import React from 'react'
import { render } from 'react-dom'

class Stock extends React.Component{
  render(){
    return(
    <div  onClick={()=>this.props.addToPro(this.props.id)}>
      <div className="card">
        <div className="card-body" >
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.price}</p>
        </div>
      </div>
    </div>
    )
  }
}



export default Stock
