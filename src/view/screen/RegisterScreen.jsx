import React from "react";
import Axios from "axios";
import { API_URL } from "../../constant/API";
import { Spinner } from 'reactstrap';

export default class RegisterScreen extends React.Component {
  state = {
    userArr: [],
    username: "",
    pass: "",
    repeatPass: "",
    fullName: "",
    role: "",
    isSubmit: false
  };

  inputHandler = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  registerData = () => {
    const { username, pass, repeatPass, fullName, role, isSubmit } = this.state;

    this.setState({isSubmit: true})
    setTimeout(() => {
    Axios.get(`${API_URL}/users`, {
      params: {
        username: username,
      },
    }).then((res) => {
      if (res.data.length == 0) {
        if (pass === repeatPass) {
          Axios.post(`${API_URL}/users`, {
            username: username,
            password: pass,
            fullname: fullName,
            role: role,
          })
            .then((res) => {
              console.log(res);
              this.setState({ userArr: res.data, isSubmit: false });
              alert("Selamat Anda Berhasil Register");
              this.setState({
                username: "",
                pass: "",
                repeatPass: "",
                fullName: "",
                role: "",
              });
            })
            .catch((err) => {
              alert("Registrasi Gagal");
              this.setState({ isSubmit: false });
            });
        } else {
          alert("Password tidak cocok");
          this.setState({ isSubmit: false });
        }
      } else {
        alert("Username sudah ada");
        this.setState({ isSubmit: false });
      }
    }) }, 2000);
  }

  render() {
    const { username, pass, repeatPass, fullName, role, isSubmit } = this.state;

    return (
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
        <h1>Welcome to Register Screen</h1>
        <br />
        <br />
        <div id="register">
          <h3>Register</h3>
          <br />
          <input
            onChange={(e) => this.inputHandler(e, "username")}
            type="text"
            value={username}
            placeholder="Username"
          />
          <br />
          <input
            onChange={(e) => this.inputHandler(e, "pass")}
            type="text"
            value={pass}
            placeholder="Password"
          />
          <br />
          <input
            onChange={(e) => this.inputHandler(e, "repeatPass")}
            type="text"
            value={repeatPass}
            placeholder="Repeat Password"
          />
          <br />
          <input
            onChange={(e) => this.inputHandler(e, "fullName")}
            type="text"
            value={fullName}
            placeholder="Full Name"
          />
          <br />
          <input
            onChange={(e) => this.inputHandler(e, "role")}
            type="text"
            value={role}
            placeholder="Role"
          />
          <br />
          <br />
          <br />
          <button onClick={this.registerData} disabled={isSubmit} className="btn btn-primary">
            Register
            {/* {isSubmit ? <Spinner animation="border" role="status" /> : null} */}
          </button>
        </div>
      </div>
    );
  }
}
