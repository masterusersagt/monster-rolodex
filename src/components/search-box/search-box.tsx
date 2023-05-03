import { type } from 'os';
import { ChangeEvent, ChangeEventHandler } from 'react';

import './search-box.style.css';

const name: string = '123451';

// const func1: (a: string,b: number, c: boolean) => boolean = (a, b, c) => { return true }
// const func2: (a: string,b: number, c: boolean) => void = (a, b, c) => { }

// type CanadianAddress = {
//   street: string;
//   province: string;
// }

// type UsaAdress = {
//   strett: string;
//   state: string;
// }

// type ItalianAddress = {
//   street: string;
//   region: string;
// }

// type NorthAmericanAdress = CanadianAddress | UsaAdress;

// const Adress: NorthAmericanAdress = {
//   strett: 'adas',
//   state: 'adas',
//   province: 'ere'
// }

//type

// So wie Classe in Java ObjecktorintierCode
// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string; // Optional string oder null
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void
// }

// types ist so wie ein union in C für funktionalen Code
type SearchBoxProps = {
  className: string;
  placeholder?: string;
//   onChangeHandler: (a: string) => void;
//   func: ChangeEventHandler;
//   onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBoxEffect = ({className, placeholder, onChangeHandler}: SearchBoxProps) => {
//    console.log('Render from SearchBox')
    return (
        <input className  = {`search-box ${className}`}
                type       = 'search'
                placeholder= { placeholder }
                onChange   = { onChangeHandler } />
    );
}

export default SearchBoxEffect;
