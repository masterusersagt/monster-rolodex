import { Component } from 'react';
import { useState, useEffect }  from 'react';

import logo            from './logo.svg';
import CardListEffect  from './components/card-list/card-list.component';
import SearchBoxEffect from './components/search-box/search-box.useEffect.component'

import './App.css'
import './App.old.css';

const App = () => { 
  console.log('render');
  const [searchField, setSearchField]        = useState(''); //[value, setValue]
  const [monsters,    setMonsters]           = useState([]);
  const [filteredMonsters, setFilterMonster] = useState([]);
  console.log('searchField: ' + JSON.stringify(searchField));
  console.log('monsters: '    + JSON.stringify(monsters));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('Response from Fetch: ' + JSON.stringify(response));
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      })
  }, []);

  useEffect(() => {
    const newfilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilterMonster(newfilterMonsters);
    console.log('effectIsFiereing');
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    console.log('StartArray: ' + JSON.stringify(monsters));
    console.log('onChange: '   + event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    console.log('search to: '  + searchFieldString);
    setSearchField(searchFieldString);
    console.log('search to: '  + searchFieldString);
  }

   return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBoxEffect className       = 'monster-search-box'
                       onChangeHandler = {onSearchChange}
                       placeholder     = 'search monsters' />
      <CardListEffect monsters={filteredMonsters}/>
    </div>
  );
};

// class App extends Component {

//   constructor() {
//     super();
//     console.log("I run 1!. The Constructor!");
//     this.state= {
//       name: {
//         firstname: 'Christos',
//         lastname : 'Mazarakis',
//       },
//       company: 'Avision Gmbh',
//       monster1: {
//         id  : '1',
//         name: 'Christos Mazarakis'
//       },
//       monster2: {
//         id  : '2',
//         name: 'Master_User'
//       },
//       monster3: {
//         id  : '3',
//         name: 'Jamer Kirk'
//       },
//       monsters: [],
//       monstersBoss: [
//         {id: '4', name: 'Christos Mazarakis'},
//         {id: '5', name: 'James Kirk'},
//         {id: '6', name: 'Master_User'}
//       ],
//       searchField: ''
//     }
//   }

//   componentDidMount () {
//     console.log("I run 3!. The componentDidMount");
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         console.log("Response: " + response);
//         return response.json();
//       })
//       .then(users => this.setState(() => {
//         return {monsters: users}
//       },
//       () => {
//         console.log("Monsters: " + this.state);
//       }));
//   }

//   onSearchChange = (event) => {
//     console.log({StartArray: this.state.monsters});
//     console.log("onChange: " + event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     console.log("search to: " + searchField);

//     this.setState(() => {
//       return { searchField };
//     },
//     () => {
//       console.log({EndArray: this.state.monsters})
//     });
//   }

//   render () {
//     console.log("I run 2!. The render Ich muss leider öffters ausgeführt werden uns zeichnen");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter( (monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     });

//     return (
//     <div className='App'>
//       <h1 className='app-title'>-)+(- Monster Rolodex -)+(-</h1>
//       <hr/>
//       <input className='search-Box'
//              type='search'
//              placeholder='search monsters'
//              onChange = { onSearchChange } />
//       <SearchBox className       = 'monster-search-box'
//                  placeholder     = 'search monsters'
//                  onChangeHandler = {onSearchChange}/>

//       <CardList monsters={filterMonsters}/>
//       <div key={this.state.monster1.id}>
//         <h1>{this.state.monster1.name}</h1>
//       </div>

//       <div key={this.state.monster2.id}>
//         <h1>{this.state.monster2.name}</h1>
//       </div>

//       <div key={this.state.monster3.id}>
//         <h1>{this.state.monster3.name}</h1>
//       </div>

//       <hr/>
//       {
//         this.state.monstersBoss.map((monster) => {
//           return <div key={monster.id}>
//                     <u>{monster.name}</u>
//                  </div>
//         })
//       }
//     </div>
//     );
//   }

//   usernameApp () {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work on {this.state.company}</p>
//           <button onClick={ () => {
//               this.setState({
//                 name: {
//                   firstname: 'Master',
//                   lastname:  'User'
//                 }
//               });
//               console.log(this.state);
//             }
//           }>Change Name example 1</button>
//           <button onClick={ () => {
//               this.setState(() => {
//                 return {
//                   name: {
//                     firstname: 'Master',
//                     lastname : 'User'
//                   }
//                 }
//               },
//               () => {
//                 console.log(this.state);
//               }); 
//             }
//           }>Change Name example 2</button>
//         </header>
//       </div>
//     );
//   }

// }

export default App;
