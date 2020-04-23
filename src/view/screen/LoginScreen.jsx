import React from "react"
import Axios from 'axios'
import { API_URL } from '../../constant/API'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import { getUser, loginHandler } from "../../redux/actions";
import { connect } from "react-redux";
import Cookie from 'universal-cookie'

const cookieObject = new Cookie()

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
        const { userLogin, passLogin, isLogin } = this.state
        const userData = {
            username: userLogin,
            password: passLogin
        }
        this.props.onLogin(userData)
        // Axios.get(`${API_URL}/users`, {
        //     params: {
        //         username: userLogin,
        //         password: passLogin,
        //     }
        // })
        //     .then((res) => {
        //         console.log(res)    
        //         if (res.data.length !== 0) {
        //             swal('Selamat', 'Login berhasil', 'success')
        //             this.props.onGetUser(userLogin)
        //             this.setState({ userLogin: "", passLogin: "", isLogin: true, currentUser: userLogin })
        //         }
        //         else {
        //             alert('Username atau Password Salah')
        //         }
        //     })
        //     .catch((err) => {
        //         alert('Login Gagal')
        //     })
    }

    //1. componenDidUpdate akan ketrigger ketika ada update state/props
    //2. global state akan di map melalui mapStateToProps dan connect
    //3. sehingga global state = props
    //4. jika global state berubah, props juga berubah
    //5. jika props berubah, maka akan trigger componentDidUpdate
    componentDidUpdate() {
        //1. jika this.props.user.id sudah terisi maka akan masuk dalam global state, dan cookie akan diset
        if (this.props.user.id) {
            cookieObject.set("authData", JSON.stringify(this.props.user))
        }
    }

    render() {
        const { userLogin, passLogin, isLogin, currentUser } = this.state

        if (!this.props.user.id) {
            return (
                <div
                    className="d-flex justify-content-center align-items-center flex-column text-center"
                >
                    <h1>Welcome to Login Screen</h1><br /><br />
                    <div id="login">
                        <h3>Login</h3><br />
                        <p>username: {this.props.user.username}</p>
                        <input onChange={(e) => this.inputHandler(e, 'userLogin')} id="username" type="text" value={userLogin} placeholder="Username" /><br />
                        <input onChange={(e) => this.inputHandler(e, 'passLogin')} id="password" type="text" value={passLogin} placeholder="Password" /><br /><br />
                        <button onClick={this.loginUser} className="btn btn-primary">Login</button><br /><br />
                    </div>

                </div >
            )
        } else {
            return <Redirect to={`/profile/${this.props.user.username}`} />
        }
    }
}

const stateMapToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    onLogin: loginHandler
};

export default connect(stateMapToProps, mapDispatchToProps)(LoginScreen);
