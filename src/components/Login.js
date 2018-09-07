import React from 'react'
import { connect } from 'react-redux'
import { UserLogin } from '../actions/loginAction'

class Login extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        geometry: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.UserLogin(this.state.name);
        this.setState({
            name: '',
            email: '',
            phone: '',
            geometry: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return(
            <div>
                <h5 className="page-title">Login Here</h5>
                <form onSubmit={ this.handleSubmit }>
                    <div  className="text-field">
                        <label htmlFor="name">Name </label>
                        <input type="text" id="name" onChange={ this.handleChange } value={this.state.name} />
                        <label htmlFor="email">E-mail </label>
                        <input type="text" id="email" onChange={ this.handleChange } value={this.state.email} />
                        <label htmlFor="phone">Phone </label>
                        <input type="text" id="phone" onChange={ this.handleChange } value={this.state.phone} />
                        <label htmlFor="geometry">Locate me </label>
                        <input type="text" id="geometry" onChange={ this.handleChange } value={this.state.geometry} />
                    </div>
                    <div className="login-submit-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            
            
            </div>
        )
    }
}

export default connect(null, {UserLogin})(Login);