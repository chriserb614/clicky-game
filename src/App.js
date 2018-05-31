import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Cards from './components/Cards'
import images from './images.json'

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: images
  }

  randomRender = id => {
    this.state.images.forEach((image) => {
      if (image.id === id) {
        if (image.clicked) {
          alert('You lost! Try again!')
          this.setState({})
          this.resetGame()
          return false
        }
        else {
          this.updateScore()
          image.clicked = true
        }
        if (this.state.score >= this.state.highScore) {
          this.newHighScore()
        }
      }
    })
  }
  // shuffle cards
  randomOrganize = (array) => {
    let copy = [], n = array.length, i
    while (n) {
      i = Math.floor(Math.random() * array.length)
      if (i in array) {
        copy.push(array[i])
        delete array[i]
        n--
      }
    }
    this.setState({ images: copy })
  }
  // updated score
  updateScore = () => {
    this.setState((newState) => (
      { score: newState.score + 1 }
    ), () => this.winning())
  }
  // new high score
  newHighScore = () => {
    this.setState((newState) => (
      { highScore: newState.score }
    ))
  }
  // win game
  winning = () => {
    if (this.state.score === 10) {
      alert('You Win!')
      this.setState({})
      this.resetGame()
    }
    else {
      setTimeout(() => {
        this.randomOrganize(this.state.images)
      }, 500)
    }
  }

  // reset game
  resetGame = () => {
    this.state.images.forEach((image) => {
      image.clicked = false
    })
    this.setState({ score: 0 })
  }

  render() {
    return (
      <Fragment>

        <Header score={this.state.score} highScore={this.state.highScore} />
        <Main>
          {this.state.images.map(image => {
            return <Cards {...image}
              key={image.id}
              randomRender={this.randomRender}
              randomOrganize={() => this.randomOrganize(this.state.images)} />;
          })}
        </Main>
      </Fragment>

    )
  };
}

export default App;
