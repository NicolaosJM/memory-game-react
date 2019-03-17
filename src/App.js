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
    topScore: 0,
    clickedCats: [],
    middleMessage: "Click on all the cats without repeating!"
  };

  componentDidMount() {
    this.setState({ cats: this.shuffle(this.state.cats) });
  };
  correctGuess = catsChanged => {
    const { score, topScore } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    console.log("correct guess", catsChanged)
    this.setState({
      middleMessage: "Correct!",
      score: newScore,
      topScore: newTopScore
    });
    this.handleShuffle();
  };

  // incorrectGuess = cats => {
  //   this.setState({
  //     cats: this.resetCats(cats),
  //     score: 0
  //   });
  // };

  changeClickedState = id => {
    if (this.state.clickedCats.indexOf(id) === -1) {
      this.correctGuess();
      this.setState({ clickedCats: this.state.clickedCats.concat(id) })
    } else {
      this.resetCats();
    }
    // let guessRight = false;
    // const newCats = this.state.cats.map(item => {
    //   const newItem  = {...item};

    //   if (newItem.id === id) {
    //     if(!newItem.clicked) {
    //       console.log('hi i was clicked ==>', newItem.clicked)
    //       newItem.clicked = true;
    //       guessRight = true;
    //     };
    //   };
    //   return newItem;
    // });
    // guessRight ? this.correctGuess(newCats) : this.incorrectGuess(newCats);
  };

  resetCats = () => {
    this.setState({
      clickedCats: [],
      // topScore: this.topScore,
      score: 0,
      middleMessage: "Incorrect! Please Start Over"
    })
    this.handleShuffle();
    // const resetCats = cats.map(item => ({ ...item, clicked: false}));
    // return this.shuffle(resetCats);
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
    // this.setState({ cats:cats})
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

  handleShuffle = () => {
    let shuffledCats = this.shuffle(cats);
    this.setState({ cats: shuffledCats });
  };

  render() {
    // console.log('state from App Component =>', this.state)
    const { cats } = this.state
    console.log("2", this.state.score)
    return (
      <Wrapper>
        <Navbar resetCats={this.state.resetCats} score={this.state.score} topScore={this.state.topScore} middleMessage={this.state.middleMessage} />

        {cats.map(cat => (
          <Cards
            key={cat.id}
            changeClickedState={this.changeClickedState}
            shuffle={this.shuffle}
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
