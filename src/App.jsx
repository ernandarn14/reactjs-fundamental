import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './view/screen/NewScreen'
import TableProduct from './view/component/TableProduct';

function App() {
  // let kota = ['Jakarta', 'Solo', 'Surabaya', 'BSD']
  // const renderKota = () => {
  //   return (
  //     kota.map(val => (
  //       <li>{val}</li>))
  //   )
  // }
  return (
    <div className="App">
      {/* <NewScreen />
      <h1 className="text-class">Halo</h1>
      <h2 style={{ border: '1px solid red', marginTop: '70px' }}>coba styling</h2>
      <NewScreen />
      {renderKota()} */}
      <TableProduct />
    </div>
  );
}

export default App;
