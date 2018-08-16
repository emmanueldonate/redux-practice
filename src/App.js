import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends Component {
  state = {
    name: '',
    alive: true
  }

  handleChange = ({ target: { type, checked, name, value} }) => {
    this.setState({[name]: type === 'text' ? value : checked });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, alive } = this.state;
    this.props.addCat(name, alive)
    this.setState({ name: '', alive: true });
  };

  render() {
    return (
      <div className="App">
      <div>
        <h3>Art's Cats</h3>
        <ul>
          {this.props.allCats.map(cat => <li key={cat.name}>{cat.name} - {cat.alive ? 'Alive' : 'RIP'}</li>)}
        </ul>
      </div>
      <form on submit={this.handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        name="name" 
        onChange={this.handleChange} 
        value={this.state.alive} 
        id="alive" /> 
        </div>
        <div>
          <input 
          type="checkbox" 
          name="alive" 
          id="alive"
          onChange={this.handleChange}
          checked={this.state.alive}
           />
          <label htmlFor="alive">is alive</label>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allCats: state.cat.all

  }
}


export default connect(mapStateToProps,
actions
)(App);
