import React, { Component } from 'react';
import './App.css';
import cats from "./cats.json";
import Wrapper from './components/Wrapper';
import Navbar from "./components/Navbar";
import Cards from "./components/Cards"

class App extends Component {

  state = {
    cats,
    score: 0,
    topScore: 0
  };

  correctGuess = catsChanged => {
    const {score, topScore} = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      data: this.shuffle(catsChanged),
      score: newScore,
      topScore: newTopScore
    });
  };

  incorrectGuess = cats => {
    this.setState({
      cats: this.resetGame(cats),
      score: 0
    });
  };

  changeClickedState = id => {
    console.log('hi i was clicked ==>')
    let guessRight = false;
    const newCats = this.state.cats.map(item => {
      const newItem  = {...item};
      if (newItem.id === id) {
        if(!newItem.clicked) {
          newItem.clicked = true;
          guessRight = true;
        };
      };
      return newItem;
    });
    guessRight ? this.correctGuess(newCats) : this.incorrectGuess(newCats);
  };

  resetGame = (cats) => {
    const resetGame = cats.map(item => ({ ...item, clicked: false}));
    return this.shuffle(resetGame);
  };

  shuffle = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;

  // shuffle = () => {
  //   let i = this.length, j, temp;
  //   while (--i > 0) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     temp = this[j];
  //     this[j] = this[i];
  //     this[i] = temp;
  //   };
  //   return this;
  };

  render() {
    // console.log('state from App Component =>', this.state)
    const { cats } = this.state
    console.log("2", this.state.score)
    return (
      <Wrapper>
        <Navbar resetGame={this.state.resetGame} score={this.state.score} topScore={this.state.topScore}/>
        {cats.map(cat => (
          <Cards
            key={cat.id}
            changeClickedState={this.changeClickedState}
            id={cat.id}
            clicked={cat.clicked}
            image={cat.image}
            />
        ))}
      </Wrapper>
    );
  };
};

export default App;
