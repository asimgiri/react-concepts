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

    // generateContact = () => {
    //     for(var i = 0; i < this.props.items.length; i++){
    //         // console.log(this.props.items)
    //         console.log(this.props.items[i].name)
    //         console.log('Keyword : ', this.state.keyword)
    //     }    
    // }

    findMatch = () => {
        for (let i = 0; i < this.props.items.length; i++) {
            if (this.props.items[i].name.includes(this.state.keyword)) {
                console.log('Match')
                return (
                    <Contact
                        img="https://lorempixel.com/70/70"
                        name="Fullname"
                        mob="+977-9851086273"
                        location="Bhaktapur, Nepal"
                    />
                )
            }
        }
    }

    // generateContact = () => {
    //     {
    //         this.props.items.map((value) => {
    //             return (
    //                 <Contact
    //                     img={value.img}
    //                     name={value.name}
    //                     mob={value.mob}
    //                     location={value.location}
    //                 />
    //             )
    //         })
    //     }
    // }


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


                    ) : null}

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
        )
    }
}

export default ContactMgr;