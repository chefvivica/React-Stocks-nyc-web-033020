import React, { Component } from 'react'

export class MyItem extends Component {
  render() {
    return (
      <div>
        <div  onClick={()=>this.props.removeItem(this.props.id)}>
          <div className="card">
            <div className="card-body" >
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyItem
