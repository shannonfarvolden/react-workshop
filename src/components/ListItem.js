function ListItem(props) {
  const { title, data } = props;

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListItem;
