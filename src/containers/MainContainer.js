import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks : [],
    proStock:[],
    sortStocks: [],
    
  }
  
  sortedStock = sortBy => {
    let arr = []
    if(sortBy === "Alphabetically"){
      arr = this.state.sortStocks.sort((a, b) => a.name > b.name ? 1 : -1)
    } else if (sortBy === "Price"){
      arr = this.state.sortStocks.sort((a, b) => a.price > b.price ? 1 : -1)
    }else{
      console.log("sth wrong")
    }
    this.setState({sortStocks:arr})
  }


  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(result => this.setState({stocks : result, sortStocks : result}))
  }


  addToPro = (id) => {
    let addedStock = this.state.stocks.find(stock =>stock.id === id)
    this.setState({
      proStock : [...this.state.proStock,addedStock]
    })
  }

  removeItem = (id) => {
    let removedStocks = this.state.proStock.filter(stock=>stock.id !== id)
    this.setState({
      proStock:removedStocks
    })
  }

  filterHandler = (e) => {

    let typedStock = this.state.stocks.filter(stock=> stock.type === e.target.value)
    this.setState({sortStocks: typedStock})    
  }

  render() {
    console.log("mianCon",this.state)
    return (

      <div>
        <SearchBar sortedStock={this.sortedStock} filterHandler={this.filterHandler}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.sortStocks} addToPro={this.addToPro}   />
            </div>
            <div className="col-4">
            <PortfolioContainer proStock={this.state.proStock} removeItem={this.removeItem}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
