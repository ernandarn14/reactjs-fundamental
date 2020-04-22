import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookCard from './view/component/BookCard';
import CounterScreen from './view/screen/CounterScreen';
import InputScreen from './view/screen/InputScreen';
import AuthScreen from './view/screen/AuthScreen';
import LifeCycleScreen from './view/screen/LifeCycleScreen';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import HomeScreen from './view/screen/HomeScreen';
import PageNotFound from './view/screen/PageNotFound';
import Navbar from './view/component/Navbar';
import ProfileScreen from './view/screen/ProfileScreen';
import RegisterScreen from './view/screen/RegisterScreen';
import LoginScreen from './view/screen/LoginScreen';
import NewAuthScreen from './view/screen/NewAuthScreen';
import ProfileUser from './view/screen/ProfileUser';
import ToDoReduxScreen from './view/screen/ToDoReduxScreen'
import Cookie from 'universal-cookie'

const cookieObject = new Cookie()

class App extends React.Component {

  // let arrBooks = [
  //   {
  //     author: "Margaret Atwood",
  //     title: "The handmaid's tale",
  //     review: 4,
  //     desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
  //     price: 18.99,
  //     discount: 60,
  //     image: <img src={require('./view/image/handmaid.png')} />,
  //     stock: 7,
  //   },
  //   {
  //     author: "Kevin Kwan",
  //     title: "Crazy rich asians",
  //     review: 5,
  //     desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
  //     price: 24.12,
  //     discount: 80,
  //     image: <img src={require('./view/image/crazyRich.png')} />,
  //     stock: 0,
  //   },
  //   {
  //     author: "Aldous Huxley",
  //     title: "Brave new world",
  //     review: 3,
  //     desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
  //     price: 18.99,
  //     discount: 60,
  //     image: <img src={require('./view/image/brave.png')} />,
  //     stock: 3,
  //   },
  //   {
  //     author: "Tara Westover",
  //     title: "Educated",
  //     review: 4.5,
  //     desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
  //     price: 34.21,
  //     discount: 0,
  //     image: <img src={require('./view/image/educated.png')} />,
  //     stock: 3,
  //   },
  // ];
  // const renderBook = () => {
  //   return arrBooks.map(val => {
  //     return (
  //       <BookCard book={val} />
  //     )
  //   })
  // }
  render() {
    return (
      // <div className="App">
      //   <h1>Hello</h1>
      //   <h1>Welcome to Catalog!</h1>
      //   <br></br><br></br><br></br>
      //   <div className="row offset-md-0">
      //     {renderBook()}
      //   </div>
      //   <CounterScreen />
      //   <InputScreen />
      //   <div className="row offset-md-4">
      //     <AuthScreen />
      //   </div>
      //   <LifeCycleScreen />
      // </div>
      <>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={HomeScreen} />
        <Route exact path="/auth" component={AuthScreen} />
        <Route exact path="/input" component={InputScreen} />
        <Route exact path="/counter" component={CounterScreen} />
        <Route exact path="/profile/:pikachu" component={ProfileScreen} /> */}
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/auth" component={NewAuthScreen} />
          <Route exact path="/profile/:username" component={ProfileUser} />
          <Route exact path="/input" component={InputScreen} />
          <Route exact path="/todo" component={ToDoReduxScreen} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    )
  }
}

export default withRouter(App);
