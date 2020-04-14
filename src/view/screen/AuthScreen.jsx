import React from 'react'
import ReactDOM from 'react-dom'
class AuthScreen extends React.Component {
    state = {
        userArr: [],
        username: "",
        pass: "",
        repeatPass: "",
        userLogin: "",
        passLogin: ""

    }
    render() {
        const { username, pass, repeatPass, userArr, userLogin, passLogin } = this.state

        const inputText = (event, field) => {
            this.setState({ [field]: event.target.value })
        }

        const newUsername = username
        const newPass = pass
        const newUser = { 'username': newUsername, 'password': newPass }
        const isRegister = () => {
            if (pass === repeatPass) {
                this.setState({ userArr: userArr.concat(newUser) })
                alert('Selamat Anda Berhasil Register')
                this.setState({ username: "", pass: "", repeatPass: "" })
            } else {
                alert("Password Anda Tidak Cocok")
            }
        }


        const islogin = () => {
            let login = userArr.map((val) => val.username === userLogin && val.password === passLogin)

            if (login) {
                (alert('Login berhasil'))
                this.setState({ userLogin: "", passLogin: "" })
                return ReactDOM.render(<p>Welcome, {userLogin}!</p>, document.getElementById('gretting'))
            } else {
                return alert('Username atau Password Salah')
            }

        }

        return (
            <div
                className="d-flex justify-content-center align-items-center flex-column"
            >
                <h1>Welcome to Auth Screen</h1><br /><br />
                <div id="register" >
                    <h3>Register</h3>
                    <input onChange={(e) => inputText(e, 'username')} type="text" value={username} placeholder="Username" /><br />
                    <input onChange={(e) => inputText(e, 'pass')} type="text" value={pass} placeholder="Password" /><br />
                    <input onChange={(e) => inputText(e, 'repeatPass')} type="text" value={repeatPass} placeholder="Repeat Password" /><br /><br />
                    <button onClick={isRegister} className="btn btn-primary">Register</button>
                </div>
                <div id="login">
                    <h3>Login</h3>
                    <input onChange={(e) => inputText(e, 'userLogin')} id="username" type="text" value={userLogin} placeholder="Username" /><br />
                    <input onChange={(e) => inputText(e, 'passLogin')} id="password" type="text" value={passLogin} placeholder="Password" /><br /><br />
                    <button onClick={islogin} className="btn btn-primary">Login</button><br /><br />
                    <h3 id="gretting"></h3>
                </div>
            </div>
        )
    }
}

export default AuthScreen