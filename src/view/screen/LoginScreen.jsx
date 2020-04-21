import React from "react"
import Axios from 'axios'
import { API_URL } from '../../constant/API'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import { getUser } from "../../redux/actions";
import { connect } from "react-redux";

class LoginScreen extends React.Component {
    state = {
        userLogin: "",
        passLogin: "",
        isLogin: false,
        currentUser: ""
    }


    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    loginUser = () => {
        const { userLogin, passLogin, currentUser } = this.state
        Axios.get(`${API_URL}/users`, {
            params: {
                username: userLogin,
                password: passLogin,
            }
        })
            .then((res) => {
                console.log(res)    
                if (res.data.length !== 0) {
                    swal('Selamat', 'Login berhasil', 'success')
                    this.props.onGetUser(userLogin)
                    this.setState({ userLogin: "", passLogin: "", isLogin: true, currentUser: userLogin })
                }
                else {
                    alert('Username atau Password Salah')
                }
            })
            .catch((err) => {
                alert('Login Gagal')
            })
    }

    render() {
        const { userLogin, passLogin, isLogin, currentUser } = this.state

        if (!isLogin) {
            return (
                <div
                    className="d-flex justify-content-center align-items-center flex-column text-center"
                >
                    <h1>Welcome to Login Screen</h1><br /><br />
                    <div id="login">
                        <h3>Login</h3><br />
                        <input onChange={(e) => this.inputHandler(e, 'userLogin')} id="username" type="text" value={userLogin} placeholder="Username" /><br />
                        <input onChange={(e) => this.inputHandler(e, 'passLogin')} id="password" type="text" value={passLogin} placeholder="Password" /><br /><br />
                        <button onClick={this.loginUser} className="btn btn-primary">Login</button><br /><br />
                    </div>
                  
                </div >
            )
        } else {
            return <Redirect to={`/profile/${currentUser}`} />
        }
    }
}

const stateMapToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    onGetUser: getUser,
};

export default connect(stateMapToProps, mapDispatchToProps)(LoginScreen);
