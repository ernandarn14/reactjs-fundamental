import React from "react"

class LifeCycleScreen extends React.Component{
    state = {
        username: "",
        time: new Date()
    }
    componentDidMount(){
        // this.setState({username: "doraemon"})
        this.timer = setInterval(() => this.triggerClock(), 1000)
    }
    // componentDidUpdate(){
    //     alert("anda merubah username")
    // }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    triggerClock = () => {
        this.setState({time: new Date()})
    }
    render (){
        return (
            <div>
                <h1>Test Life Cycle Screen</h1>
                {/* <h2>welcome, {this.state.username}</h2> */}
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                {/* <input type="text" onChange={(e) => this.setState({username: e.target.value})} /> */}
            </div>
        )
    }
}

export default LifeCycleScreen