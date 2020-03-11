import React, { Component } from 'react'

class Clock extends Component {

    state = {
        time: new Date()
    }


    componentDidMount() {
        console.log("This is running after render function")
        setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)

    }



    render() {
        console.log("this is render function running")
        return (
            <div>
                <h2>
                    {this.state.time.toString()}
                </h2>
            </div>
        )
    }
}

export default Clock