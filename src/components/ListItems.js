function ListItems(props) {
  const { data, filter } = props;

  return (
    <>
      <ul>
        {data
          .filter((item) =>
            item.name.toLowerCase().startsWith(filter.toLowerCase())
          )
          .map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
      </ul>
    </>
  );
}

export default ListItems;
