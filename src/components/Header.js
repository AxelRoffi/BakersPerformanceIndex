import React, { Component } from 'react'
import axios from 'axios'
import '../styles/header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0,
      marketCap: 0,
      volume24h: 0,
      change1h: 0,
      change24h: 0,
      change7d: 0,
      icoVariationPercentage: 0,
      btcCurrentPrice: 0,
      liquidityIndexPercentage: 0,

    }
  }
  componentDidMount() {

    const urlTezosCoinGeko = 'https://api.coingecko.com/api/v3/coins/tezos/'
    axios.get(urlTezosCoinGeko)
      .then(response => {
        this.setState({
          price: response.data.market_data.current_price.usd,
          marketCap: response.data.market_data.market_cap.usd,
          volume24h: response.data.market_data.total_volume.usd,
          change1h: response.data.market_data.price_change_percentage_1h_in_currency.usd,
          change24h: response.data.market_data.price_change_percentage_24h_in_currency.usd,
          change7d: response.data.market_data.price_change_percentage_7d_in_currency.usd,
          btcCurrentPrice: response.data.market_data.current_price.btc,
          icoVariationPercentage: response.data.market_data.roi.percentage,
        }
        )
      })


  }
  render() {
    const price = this.state.price
    const marketCap = this.state.marketCap
    const volume24h = this.state.volume24h
    const change1h = this.state.change1h
    const change24h = this.state.change24h
    const change7d = this.state.change7d
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <div>
        <div>
          <div className="d-flex" className='financialData'>
            <div className="p-2" >Price: ${Number(price).toFixed(2)}</div>
            <div className="p-2">Market Cap: ${numberWithCommas(Number(marketCap).toFixed(0))}</div>
            <div className="p-2 ">Volume 24h: ${numberWithCommas(Math.round(volume24h))}</div>
            <div className="p-2 row">
              Change 1h:
                    <div className={change1h > 0.00 ? 'variationGreen' : 'variationRed'}>  {change1h.toFixed(2)}%
                    </div>
            </div>
            <div className="p-2 row">Change 24h: <div className={change24h > 0 ? 'variationGreen' : 'variationRed'}> {change24h.toFixed(2)}%</div></div>

            <div className="p-2 row">Change 7d:<div className={change7d > 0 ? 'variationGreen' : 'variationRed'}> {change7d.toFixed(2)}%</div></div>
          </div>
        </div>
        <div>
          <div className="d-flex" className='financialData'>
            <div className="p-2" >ICO Price: $0.47</div>
            <div className="p-2 row">ICO Variation:<div className={this.state.icoVariationPercentage > 0 ? 'variationGreen' : 'variationRed'}> {this.state.icoVariationPercentage.toFixed(2)}%</div></div>
            <div className="p-2 ">BTC Price: ₿{this.state.btcCurrentPrice.toFixed(5)}</div>
            <div className="p-2 row">
              Circulating Supply: ꜩ786,609,419
            </div>
            <div className="p-2 row">Liquidity Index Percentage:{(volume24h * 100 / marketCap).toFixed(2)}% </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Header;
