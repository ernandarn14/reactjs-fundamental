import React from 'react'
import { render } from 'react-dom'
import Axios from 'axios'
import { API_URL } from '../../constant/API'

export default class ProfileScreen extends React.Component{
    state = {
        usersList: [],
    }

    getDataHandler = () => {
        Axios.get("http://localhost:3001/users")
        .then((res) => { //respond dari API
            console.log(res.data)
            this.setState({usersList: res.data}) //menyimpan data dalam array usersList
        })
        .catch((err) => {
            console.log(err)
        })
        console.log('bukan axios')

        // Axios.get("http://localhost:3001/users", {
        //     params: {
        //         role: "user",
        //         username: "larva"
        //     }
        // })
        // .then((res) => { //respond dari API
        //     console.log(res.data)
        //     // this.setState({usersList: res.data}) 
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
        // console.log('bukan axios')
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/users/2`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    postDataHandler = () => {
        Axios.post(`${API_URL}/users`, {
            username: 'test',
            password: '123',
            fullname: 'test post data',
            role: 'admin'
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div className="text-center">
                <h1>Profile</h1>
                <h2>Welcome, {this.props.match.params.pikachu}</h2>
                <input onClick={this.getDataHandler} type="button" value="Get Data" className="btn btn-success"/>
                <input onClick={this.deleteDataHandler} type="button" value="Delete Data" className="btn btn-danger"/>
                <input onClick={this.postDataHandler} type="button" value="Post Data" className="btn btn-info"/>
            </div>
        )
    }
}