import React, { Component } from 'react';
import Contact from './Contact';


class ContactMgr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: null
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            keyword: event.target.value
        }, () => { console.log('Keyword : ', this.state.keyword) })
    }

    findMatch = () => {
        for (let i = 0; i < this.props.items.length; i++) {
            if (this.props.items[i].name.includes(this.state.keyword)) {
                console.log('Match')
                return (
                    <Contact
                        img={this.props.items[i].img}
                        name={this.props.items[i].name}
                        mob={this.props.items[i].mob}
                        location={this.props.items[i].location}
                    />
                )
            }
        }
    }

    render() {
        return (
            <div className="wrapper">
                <input type="text" placeholder="Search Contact..." onChange={this.onChangeHandler} />

                {this.state.keyword
                    ? (
                        // Mapping Must be inclosed in a parent wrapper    
                        <div>
                            {this.findMatch()}

                        </div>


                    ) : (
                        <div>
                            {this.props.items.map((value) => {
                                return (
                                    <Contact
                                        img={value.img}
                                        name={value.name}
                                        mob={value.mob}
                                        location={value.location}
                                    />
                                )
                            })}
                        </div>

                    )}
            </div>
        )
    }
}

export default ContactMgr;