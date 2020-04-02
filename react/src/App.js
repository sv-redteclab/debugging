import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentCount: 0,
      showList: false,
      usernameInputElement: React.createRef()
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleAdd() {
    let { currentCount, users } = this.state;
    const name = this.state.usernameInputElement.current.value;

    users[++currentCount] = name;
    this.setState({ users, currentCount });
  }

  toggleShow() {
    this.setState({ showList: !this.state.showList });
  }

  renderList() {
    let { currentCount, users } = this.state;
    const result = [];

    for (let index = 0; index < currentCount; ++index) {
      result.push(<div key={`entry-${index}`}>{String(users[index])}</div>);
    }
    return result;
  }

  render() {
    const { currentCount, showList, usernameInputElement } = this.state;

    return (
      <div className="App">
        <div>
          <input ref={usernameInputElement} type="text" />
          <button onClick={this.handleAdd}> Add User </button>
        </div>
        <div>
          Currently there are <span>{currentCount}</span> Users
        </div>
        <div>
          <button onClick={this.toggleShow}>Show usernames</button>
        </div>
        <div id="list">{showList && this.renderList()}</div>
      </div>
    );
  }
}

export default App;
