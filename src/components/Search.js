import './Search.css';

function Search(props) {
  const { type, setSearch } = props;

  return (
    <>
      <label htmlFor={`search-${type}`}>Search {type}:</label>
      <input
        id={`search-${type}`}
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
    </>
  );
}

export default Search;
