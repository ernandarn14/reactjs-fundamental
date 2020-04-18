import React from 'react'
import Axios from 'axios';
import { API_URL } from '../../constant/API'

export default class ProfileUser extends React.Component {
    state = {
        userList: [],
    }
    componentDidMount() {
        const { userList: [] } = this.state;
        Axios.get(`${API_URL}/users`, {
            params: {
                username: `${this.props.match.params.username}`
            }
        })
            .then((res) => {
                console.log(res)
                this.setState({ userList: res.data[0] })
            })
            .catch((err) => {
                alert('Data Kosong')
            })
    }

    render() {
        const { userList } = this.state;
        return (
            <div className="container text-center">
                <h1>Profile User {this.props.match.params.username}</h1><br/><br/>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <td>Id</td>
                            <td>Username</td>
                            <td>Fullname</td>
                            <td>Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {userList.id}
                            </td>
                            <td>{userList.username}</td>
                            <td>{userList.fullname}</td>
                            <td>{userList.role}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}