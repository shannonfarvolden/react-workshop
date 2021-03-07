function ListItems(props) {
  const { children, searchKey, searchTerm } = props;
  return (
    <div className="list-container">
      <div className="list-card">
        {data
          .filter((item) =>
            item[searchKey].toLowerCase().startsWith(search.toLowerCase())
          )
          .map((item) => ({ children }))}
      </div>
    </div>
  );
}

export default ListItems;
