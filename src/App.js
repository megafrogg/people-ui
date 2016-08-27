import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import FullList from './components/List'
import DialogCard from './components/DialogCard';

class App extends Component {

  //Lifecycle functions
  constructor() {
    super();
    this.state = {peopleArr: []};
    $.get('http://beta.json-generator.com/api/json/get/Vynd8i59Z')
      .then((response) => this.setState({peopleArr: response}));
  }

  render() {
    return(
      <section>
        <FullList items={this.state.peopleArr} action={(u) => this.updateSelectedUser(u)} />
        { this.state.selectedUser ? <DialogCard user={this.state.selectedUser} ref='dElement'/> : ""}
      </section>
    );
  }

componentDidUpdate() {
  if (this.state.selectedUser) {
    this.refs.dElement.refName.showModal();
  }
}


  //Other functions
  updateSelectedUser(user) {
    this.setState({selectedUser: user});
  }


}

export default App;
