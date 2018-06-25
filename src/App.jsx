import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import images from './images.json';

class App extends Component {
  render() {

    return (
      <div className="App">
      <Header/>
      
      <Cards image={images[1].imageSource}/>
      <Cards image={images[2].imageSource}/>
      <Cards image={images[3].imageSource}/>
      <Cards image={images[4].imageSource}/>
      <Cards image={images[5].imageSource}/>
      <Cards image={images[6].imageSource}/>
      <Cards image={images[7].imageSource}/>
      <Cards image={images[8].imageSource}/>
      <Cards image={images[9].imageSource}/>
      <Cards image={images[10].imageSource}/>
      <Cards image={images[11].imageSource}/>
      

      </div>
      );
      
  }
}

export default App;
