import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import images from './images.json';
import Wrapper from './components/Wrapper';


class App extends Component {

  state = {
    imageJson: images,
    clickedPicsArr: [],
    score: 0,
    highScore: 0,
    message: "Click a Pic to Start"
  }




  render() {

    return (
      <div className="App">
      <Header/>
      <Wrapper>

        {this.state.imageJson.map(images=> (
          <Cards
            key={images.id}
            id={images.id}
            image={images.images}
            />
        ))}
      </Wrapper>
      </div>
      );
      
  }
}

export default App;
