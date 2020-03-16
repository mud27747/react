import React, { Component } from 'react'

class Todo extends Component {
    state = {
        input: "",
        list: [] , 
    }
    // input todo list item handler
    changeHandler(e) {
        this.setState({
            input: e.target.value
        })
    }
    // list item edit handler
    editHandler(e,f){
        let list = this.state.list
        list[e].input = f.target.value
        this.setState({list})
    }

    // add todo list item
    addTodo(e) {
        e.preventDefault()
        let list = this.state.list
        let obj = {
            input: this.state.input,
            edit: false
        }
        if(this.state.input !== "") {
            list.push(obj)
            this.setState({
                list: list,
                input: ""
            })
        }
    }

    // delete todo item
   deleteTodo(e){
       let list = this.state.list 
       list.splice(e,1)
       this.setState({list:list})
   }

//    edit todo item
   editTodo(e){
       let list = this.state.list
       list[e].edit = true
       this.setState({list})
   }
//    update todo item
   editUpdate(e) {
       let list = this.state.list
       list[e].edit = false
       this.setState({list})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo.bind(this)} >
                    <input type="text" value={this.state.input} onChange={this.changeHandler.bind(this)} />
                    <button>Add</button>
                </form>
                <ul>
                    {this.state.list.map((text, key) => {
                        return (
                            <li>
                                {
                                text.edit
                                ? <div><input type="text" defaultValue={text.input} onChange={this.editHandler.bind(this,key)}></input> 
                                <button onClick={this.editUpdate.bind(this,key, text.edit)}>Update</button>
                                </div>
                                
                                :
                                <div> 
                                {text.input} <button onClick={this.deleteTodo.bind(this, key)}> delete</button> 
                                <button onClick={this.editTodo.bind(this,key, this.state.editInput)}>Edit</button>
                               </div>
                                }
                            
                             </li>
                        
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Todo