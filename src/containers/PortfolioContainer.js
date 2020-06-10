import React, { Component } from 'react';
import Stock from '../components/Stock'
import MyItem from '../components/MyItem'



class PortfolioContainer extends Component {

  render() {
    return (
      <div >
        <h2>My Portfolio</h2>
        {this.props.proStock.map(stock=><MyItem {...stock} key={stock.id} removeItem={this.props.removeItem}/>)}
      </div >
    );
  }

}

export default PortfolioContainer;