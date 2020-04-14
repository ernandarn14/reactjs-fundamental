import React from 'react'

class InputScreen extends React.Component {
    state = {
        username: "",
        email: "",
        desc: ""
    }
    render() {
        const {username, email, desc} = this.state

        const inputUser = (event, field) => {
            this.setState({[field]: event.target.value})
        }

        return(
            <div>
                <h1>Input Screen</h1>
                <h3>Username:  {username}</h3>
                <h3>Email:  {email}</h3>
                <input onChange={(e) => inputUser(e, 'username')} type="text" placeholder="Username" /><br />
                <input onChange={(e) => inputUser(e, 'email')} type="text" placeholder="Email" /><br />
                <textarea onChange={(e) => inputUser(e, 'desc')} rows="4" cols="50"/>
                <p>{desc.length} / 140</p>
            </div>

            )
    }
  
}

export default InputScreen