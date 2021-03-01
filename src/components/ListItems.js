import './ListItems.css';
function ListItems(props) {
  const { data, filter } = props;

  return (
    <div className="list-container">
      <div className="list-card">
        {data
          .filter((item) =>
            item.name.toLowerCase().startsWith(filter.toLowerCase())
          )
          .map((item) => (
            <div class="item" key={item.name}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListItems;
