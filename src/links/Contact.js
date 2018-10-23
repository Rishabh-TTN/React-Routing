import React from 'react';
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            number: '',
            click:'0'
        }
    }

    onInputChange = e => this.setState({[e.target.name]: e.target.value});
    formValidate = (e) => {
        e.preventDefault();
          this.setState({ click: 1 });
          this.handleSubmit();
    }

    handleSubmit = () => {
        const { name, number } = this.state;
        this.props.addDataHandler({ name, number });
        this.setState({name: '', number: '' }, () => {
            console.log(this.state, '###########');
        });
    };
    // componentWillMount(){
    //     console.log(this.state);
    // }
    render() {
        return (
            <form onSubmit={this.formValidate}>
                <h1>ContactUs</h1>
                Name:
                <input
                    type='text'
                    onChange={this.onInputChange}
                    value={this.state.name}
                    name="name"
                />
                <br />
                contact number:
                <input
                    type='number'
                    onChange={this.onInputChange}
                    value={this.state.number}
                    name="number"
                />
                <br/>
                <input type="submit"/>

                {
                    this.props.data.length > 0 && this.props.data.map((user, index) => {
                        return (
                            <div key={index}>
                                <b>{user.name}</b>: <i>{user.number}</i>
                            </div>
                        )
                    })
                }
                <Prompt
                    when={(this.state.click==='0')}
                    message="Are you sure you want to leave?"
                />
            </form>

        )
    }
}
export default Contact;
