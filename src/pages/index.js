import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SudokuBoard from "../components/sudokuBoard";
import { createGame } from '../util/sudokuUtil';

class IndexPage extends Component {

  state = {
    game: createGame(0),
    difficulty: 0,
    showSolution: false,
  };

  toggleSolution = (showSolution) => {
    this.setState({ showSolution: showSolution });
  };

  onReset = () => {
    this.setState({
      game: createGame(this.state.difficulty)
    });
  }

  onDifficultyChanged = (difficulty) => {
    this.setState({ difficulty }, this.onReset);
  }

  render() {
    const {
      game,
      showSolution,
    } = this.state;

    return (
      <Layout>
        <SEO title="Home" />
        <main>
          <SudokuBoard
            board={game.board}
            solution={game.solution}
            showSolution={showSolution}
          />
          <div>
            <div>
              <input
              type="button"
              value="Show Solution"
              onMouseDown={() => this.toggleSolution(true)}
              onMouseUp={() => this.toggleSolution(false)}
              />
              <input
              type="button"
              value="Reset"
              onMouseDown={() => this.onReset()}
              />
            </div>
            <div>
              Difficulty: 
              <label>
                <input
                  type="checkbox"
                  name="difficulty"
                  onChange={() => this.onDifficultyChanged(0)}
                  checked={this.state.difficulty === 0}
                /> Easy
              </label>
              <label>
                <input
                  type="checkbox"
                  name="difficulty"
                  onChange={() => this.onDifficultyChanged(1)}
                  checked={this.state.difficulty === 1}
                /> Medium
              </label>
              <label>
                <input
                  type="checkbox"
                  name="difficulty"
                  onChange={() => this.onDifficultyChanged(2)}
                  checked={this.state.difficulty === 2}
                /> Hard
              </label>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
} 

export default IndexPage;
