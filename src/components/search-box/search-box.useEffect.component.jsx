import './search-box.style.css';

const SearchBoxEffect = ({className, placeholder, onChangeHandler}) => {

    console.log('Render from SearchBox')
    return (
        <input className  = {`search-box ${className}`}
                type       = 'search'
                placeholder= { placeholder }
                onChange   = { onChangeHandler } />
    );
}

export default SearchBoxEffect;