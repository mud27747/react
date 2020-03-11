import React, { Component } from 'react'

class Todo extends Component {
    state = {
        input: "",
        list: []
    }
    changeHandler(e) {
        this.setState({
            input: e.target.value
        })
    }
    addTodo(e) {
        e.preventDefault()
        let list = this.state.list

        if(this.state.input !== "") {
            list.push(this.state.input)
            this.setState({
                list: list,
                input: ""
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo.bind(this)} >
                    <input type="text" value={this.state.input} onChange={this.changeHandler.bind(this)} />
                    <button>Add</button>
                </form>
                <ul>
                    {this.state.list.map((text) => {
                        return (
                            <li>{text}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Todo