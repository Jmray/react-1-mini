import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    picture: "",
    name: "",
    friendList: [],
  };

  constructor() {
    super()

    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

  }

  render() {
    const friendList = this.state.friendList
    .map((friend, index) => (
      <li key={index}>
      <img className='image' src={friend.picture} alt={friend.name}/>
      {friend.name}
      </li>
    ));

    return (
      <div>
        {/* this form is to accept each new friends */}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          {/*label is to group together a label with an input*/}
          <label>
              Picture:
              <input 
                value={this.state.picture} 
                type="text" 
                onChange={this.handlePictureChange}  />

          </label>
          <label>
            Name:
            <input 
              value={this.state.name} 
              type="text" 
              onChange={this.handleNameChange} />

          </label>
          <button type='submit'>Add Friend</button>
        </form>

        <ul>
          {friendList}
        </ul>
      </div>
    );
  }
  handlePictureChange(event){
    this.setState({
      picture: event.target.value,
    });
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value,
    });
  }
  handleSubmit(event){
    event.preventDefault();

    const {picture, name, friendList} = this.state;

    friendList.push({
      picture,
      name,
    });

    this.setState({
      name: '',
      picture: '',
      friendList,
    })
  }

  
}

export default App;
