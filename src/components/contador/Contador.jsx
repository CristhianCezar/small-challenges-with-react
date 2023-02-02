import React from 'react';
import './Contador.css';

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    };

    increment = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    };

    decrement = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: e.target.value,
        })
    }

    render() {
        return(
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInicial">Passo</label>
                    <input type="number" id="passoInicial" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}