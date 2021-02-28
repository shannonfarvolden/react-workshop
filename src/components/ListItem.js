import React from 'react';

function ListItem(props) {
  const { type, data } = props;

  return (
    <>
      <h1>Top {type}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListItem;
