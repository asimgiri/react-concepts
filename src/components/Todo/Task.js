import React, {Component} from 'react';

class Task extends Component{
        render(){
            return(
                <div className="task">
                    <p className="date">{this.props.date}</p>
                    <p className="taskname">{this.props.taskname}</p>
                    <button>Hide Task</button> <button  onClick={this.props.clickDelete}>Remove</button>
                </div>
            )
        }
}

export default Task;