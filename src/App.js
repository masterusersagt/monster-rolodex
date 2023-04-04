import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state= {
      monster1: {
        name: 'Christos Mazarakis'
      },
      monster2: {
        name: 'Master_User'
      },
      monster3: {
        name: 'Jamer Kirk'
      },
      name: {
        firstname: 'Christos',
        lastname:  'Mazarakis',
      },
      company: 'Avision Gmbh',
      monsters: [
        {name: 'Christos Mazarakis'},
        {name: 'James Kirk'},
        {name: 'Master_User'}
      ]
    }
  }

  render() {
    return (
    <div className='App'>
      <h1>{this.state.monster1.name}</h1>
      <h1>{this.state.monster2.name}</h1>
      <h1>{this.state.monster3.name}</h1>
      {
        this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>
        })
      }
    </div>);
  }

  username () {
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
          }>Change Name example 1</button>
          <button onClick={ () => {
              this.setState(() => {
                return {
                  name: {
                    firstname: 'Master',
                    lastname:  'User'
                  }
                }
              },
              () => {
                console.log(this.state);
              }); 
            }
          }>Change Name example 2</button>
        </header>
      </div>
    );
  }

}

export default App;
