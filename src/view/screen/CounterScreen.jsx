import React from 'react'

// const CounterScreen = (props) => {
//     return (
//         <div>
//             <h1>{props.kota}</h1>
//         </div>
//     )
// }

// class CounterScreen extends React.Component{
//     render() {
//             return (
//         <div>
// {/* <h1>{this.props.terserah}</h1> */}
//     <h1>{this.props.kota}</h1>
// </div>
//  this.props.items.map(item => (
//     <h1>{item}</h1>
// ))
//     )
//     }
// }

// class Human {
//     constructor
// }

class CounterScreen extends React.Component {
    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0

    }
    render() {
        return (
            <div>
                <h1>Coba coba</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="p-3">
                        <h1>counter 1: {this.state.counter1}</h1>
                        <button className="btn btn-primary" onClick={() => this.setState({ counter1: this.state.counter1 + 1 })}>+</button>
                        <button className="btn btn-danger" onClick={() => this.setState({ counter1: this.state.counter1 - 1 })}>-</button>
                    </div>
                    <div className="p-3 text-center">
                        <h1>counter 2: {this.state.counter2}</h1>
                        <button className="btn btn-primary" onClick={() => this.setState({ counter2: this.state.counter2 + 1 })}>+</button>
                        <button className="btn btn-danger" onClick={() => this.setState({ counter2: this.state.counter2 - 1 })}>-</button>
                    </div>
                    <div className="p-3 text-center">
                        <h1>counter 3: {this.state.counter3}</h1>
                        <button className="btn btn-primary" onClick={() => this.setState({ counter3: this.state.counter3 + 1 })}>+</button>
                        <button className="btn btn-danger" onClick={() => this.setState({ counter3: this.state.counter3 - 1 })}>-</button>
                    </div>
                </div>

                {/* <h2>{this.state.counter1}</h2> */}
                <br></br>  <br></br>
                <h3>All Counter</h3>
                <button className="btn btn-primary" onClick={() => this.setState({ counter3: this.state.counter3 + 1, counter2: this.state.counter2 + 1, counter1: this.state.counter1 + 1 })}>+</button>
                <button className="btn btn-danger" onClick={() => this.setState({ counter3: this.state.counter3 - 1, counter2: this.state.counter2 - 1, counter1: this.state.counter1 - 1 })}>-</button>
                <br></br>  <br></br>
                <button className="btn btn-info" onClick={() => this.setState({ counter3: 0, counter2: 0, counter1: 0 })}>Reset</button>
            </div>
        )
    }
}
export default CounterScreen