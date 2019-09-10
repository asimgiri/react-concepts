import React, { Component } from 'react';
import Task from './Task';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    onClickHandler = () => {
        var task = prompt('Enter a task');
        if (!task) {
            alert('You must enter a task')
        }
        else {
            var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            this.setState({
                tasks: [...this.state.tasks, {
                    taskname: task,
                    date: week[new Date().getDay()] + ' ' + month[new Date().getMonth()] + ' ' + new Date().getDate()
                }]
            }, () => {
                console.log(this.state.tasks);
            })
        }
    }

    onClickDelete = (index) => {
        console.log('You pressed delete');
        this.setState({
            tasks: this.state.tasks.splice(index)
        })
    }

    render() {
        if (this.props.items.length) {
            return (
                // <Task
                //     taskname="Buy Fish"
                //     date={new Date().getFullYear()}
                // />
                <div className="todo">
                    <button className="add" onClick={this.onClickHandler}>Add Task</button>
                    {/* {this.props..map((value) => { */}
                    {this.state.tasks.map((value, index) => {
                        return (
                            <Task
                                key={index}
                                {...value}
                                clickDelete = {this.onClickDelete}
                            />
                        )
                    })}
                </div>
            )
        }
        return (
            <p>There is no data</p>
        )
    }
}

export default Todo;