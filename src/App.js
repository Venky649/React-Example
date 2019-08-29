import React, {Component} from 'react';
import './App.css';
import Table from './Table'
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters : []
    }
  }

  removeEntry = (index) => {
     const {characters} = this.state;
     this.setState({characters: characters.filter((character, i) => {
         return i !== index;
     })
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
     const {characters} = this.state;
    return (
      <div className="container">
         <Table characterData={characters} removeEntry={this.removeEntry}/>
         <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
