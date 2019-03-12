import React from 'react';

class Ticker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: "bitcoin",
                    price: "1"
                },
                {
                    id: "ethereum",
                    price: "1"
                },
                {
                    id: "litecon",
                    price: "1"
                }
            ]
        };
    }

    renderTicker() {
        let tickers = this.state.data.map(currency => 
            <li key={currency.id}>
                <h4>{currency.id}</h4>
                <h3>{currency.price} USD</h3>
            </li>
        );
        return (
            <ol>
                { tickers }
            </ol>
        )
    }

    render() {
        return (
            <div>
                { this.renderTicker() }
            </div>
        )
    }
}

export default Ticker;