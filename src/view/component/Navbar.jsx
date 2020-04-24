import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios';
import { API_URL } from '../../constant/API'
import swal from 'sweetalert'
import { logoutHandler } from "../../redux/actions";
import Cookie from 'universal-cookie'

const cookieObject = new Cookie()

class Navbar extends React.Component {
    onlogoutHandler = () => {
        cookieObject.remove("authData")
        this.props.onLogout()
        swal('Selamat', 'Logout Anda Berhasil', 'success')
    }

    authHandler = () => {
        if (this.props.user.id) {
            return <Link to="/" onClick={this.onlogoutHandler}>Logout</Link>
        } else {
            return <Link to="/login">Login</Link>
        }
    }


    render() {
        return (
            <div className='d-flex justify-content-around align-items-center'
                style={{ height: '80px' }}>
                <Link to="/register">Register</Link>
                {/* <Link to="/login">Login</Link> */}
                <Link to="/profile">Profile</Link>
                {/* <Link to="/input">Input</Link>
                <Link to="/todo">To Do</Link> */}
                {this.props.user.username}
                {this.authHandler()}
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

const mapDispatchToProps = {
    onLogout: logoutHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)