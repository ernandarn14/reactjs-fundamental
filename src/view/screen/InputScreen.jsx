import React from 'react'
import ProfileScreen from './ProfileScreen'
import { Link } from 'react-router-dom'

class InputScreen extends React.Component {
    state = {
        username: "",
        email: "",
        desc: ""
    }

    inputUser = (event, field) => {
        this.setState({[field]: event.target.value})
    }

    render() {
        const {username, email, desc} = this.state

        return(
            <div className="container d-flex flex-column align-items-center">
                <h1>Input Screen</h1>
                <h3>Username:  {username}</h3>
                <h3>Email:  {email}</h3>
                <input onChange={(e) => this.inputUser(e, 'username')} type="text" placeholder="Username" /><br />
                <input onChange={(e) => this.inputUser(e, 'email')} type="text" placeholder="Email" /><br />
                <textarea onChange={(e) => this.inputUser(e, 'desc')} rows="4" cols="50"/>
                <p>{desc.length} / 140</p>
                <Link to={"/profile/" + username}>
                <input type="button" value="Submit" className="btn btn-primary"  />
                </Link>
              
            </div>

            )
    }
  
}

export default InputScreen