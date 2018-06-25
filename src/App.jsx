import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import images from './images.json';
import friends from './friends.json'


class App extends Component {
  render() {

    return (
      <div className="App">
      <Header/>

      <Cards 
      image={images[0].images}/>
      <Cards 
      image={images[1].images}/>
       <Cards 
      image={images[2].images}/>
       <Cards 
      image={images[3].images}/>
       <Cards 
      image={images[4].images}/>
       <Cards 
      image={images[5].images}/>
       <Cards 
      image={images[6].images}/>
    <Cards 
      image={images[7].images}/>
       <Cards 
      image={images[8].images}/>
       <Cards 
      image={images[9].images}/>
       <Cards 
      image={images[10].images}/>
       <Cards 
      image={images[11].images}/>
  

      </div>
      );
      
  }
}

export default App;
