import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    console.log("I run 1!. The Constructor!");
    this.state= {
      name: {
        firstname: 'Christos',
        lastname : 'Mazarakis',
      },
      company: 'Avision Gmbh',
      monster1: {
        id  : '1',
        name: 'Christos Mazarakis'
      },
      monster2: {
        id  : '2',
        name: 'Master_User'
      },
      monster3: {
        id  : '3',
        name: 'Jamer Kirk'
      },
      monsters: [],
      monstersBoss: [
        {id: '4', name: 'Christos Mazarakis'},
        {id: '5', name: 'James Kirk'},
        {id: '6', name: 'Master_User'}
      ],
      searchField: ''
    }
  }

  componentDidMount () {
    console.log("I run 3!. The componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log("Response: " + response);
        return response.json();
      })
      .then(users => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log("Monsters: " + this.state);
      }));
  }

  render () {
    console.log("I run 2!. The render Ich muss leider öffters ausgeführt werden uns zeichnen");
    const filterMonsters = this.state.monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
    <div className='App'>
      <input className='search-Box'
             type='search'
             placeholder='search monsters'
             onChange={ (event) => {
                console.log({StartArray: this.state.monsters});
                console.log("onChange: " + event.target.value);
                const searchField = event.target.value.toLocaleLowerCase();
                console.log("search to: " + searchField);

                this.setState(() => {
                  return { searchField };
                },
                () => {
                  console.log({EndArray: this.state.monsters})
                });
             }
            } />
      <div key={this.state.monster1.id}>
        <h1>{this.state.monster1.name}</h1>
      </div>
      <div key={this.state.monster2.id}>
        <h1>{this.state.monster2.name}</h1>
      </div>
      <div key={this.state.monster3.id}>
        <h1>{this.state.monster3.name}</h1>
      </div>
      <hr/>
      {
        this.state.monstersBoss.map((monster) => {
          return <div key={monster.id}>
                    <u>{monster.name}</u>
                 </div>
        })
      }
      <hr/>
      <div key='Filter Monster'>
        <h1>Filter Monster</h1>
        <hr/>
      </div>
      {
        filterMonsters.map((monster) => {
          return <div key={monster.id}>
                    <u>{monster.name}</u>
                 </div>
        })
      }
    </div>);
  }

  usernameApp () {
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
