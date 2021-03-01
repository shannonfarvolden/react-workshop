function ListItems(props) {
  const { data, search } = props;

  return (
    <>
      <ul>
        {data
          .filter((item) => {
            return item.name.toLowerCase().startsWith(search.toLowerCase());
          })
          .map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
      </ul>
    </>
  );
}

export default ListItems;
