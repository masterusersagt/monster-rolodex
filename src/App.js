import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state= {
      name: {
        firstname: 'Christos',
        lastname:  'Mazarakis',
      },
      company: 'Avision Gmbh'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work on {this.state.company}</p>
          <button onClick={ () => {
              this.setState({
                name: {
                  firstname: 'Master',
                  lastname:  'User'
                }
              });
              console.log(this.state);
            }
          }>Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
