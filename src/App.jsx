import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import images from './images.json';
import Wrapper from './components/Wrapper';
import RulesAndScore from './components/RulesAndScore';

class App extends Component {
  state = {
    imageJson: images,
    hasBeenClicked: [],
    score: 0,
    highScore: 0,
    message: "Click to begin"
  }
  clickHistory = (id) => {
    if(this.state.hasBeenClicked.includes(id)) {
      if(this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score});
      }
      this.setState({message: "Sorry, Incorrect. Start Again"})
      this.setState({score: 0});
      this.setState({hasBeenClicked: []});
    } else {
      this.setState({message: "Correct!"});
      this.setState({score: this.state.score + 1});
      this.shufflePics(this.state.imageJson);
      this.state.hasBeenClicked.push(id);
    }
  }
  shufflePics = arrayOfPicObjs => {
    for (let i = arrayOfPicObjs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arrayOfPicObjs[i];
      arrayOfPicObjs[i] = arrayOfPicObjs[j];
      arrayOfPicObjs[j] = temp;
    }    
  };
  render() {
    return (
      <div className="App">
      <Header/>
      <Wrapper>
      <RulesAndScore score={this.state.score} message={this.state.message} highScore={this.state.highScore}
      />
        {this.state.imageJson.map(images=> (
          <Cards
            clickHistory={this.clickHistory}
            key={images.id}
            id={images.id}
            image={images.images}
            click={images.clicked}
            />
        ))}
      </Wrapper>
      </div>
      );
  }
}
export default App;
