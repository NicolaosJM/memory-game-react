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

  changeClickedState = id => {
    console.log('hi i was clicked ==>')
    // const changedCard = this.state.filter(cat => cats.id === id);
    this.setState ({ clicked : true})
  }

  shuffle = () => {
    let i = this.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
    };
    return this;
  }

  render() {
    // console.log('state from App Component =>', this.state)
    const { cats } = this.state
    console.log("2", this.state.score)
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
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
  }
}

export default App;
