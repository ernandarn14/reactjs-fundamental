import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios';
import { API_URL } from '../../constant/API'

 class Navbar extends React.Component{
    render(){
        return(
            <div className='d-flex justify-content-around align-items-center'
            style={{height: '80px'}}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
                {/* <Link to="/input">Input</Link>
                <Link to="/todo">To Do</Link> */}
                {this.props.user.username}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo,
        user: state.user
    }
}

export default connect(mapStateToProps)(Navbar)