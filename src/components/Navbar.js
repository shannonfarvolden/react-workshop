function Navbar(props) {
  const { handleOnClickSpecies, handleOnClickPeople } = props;
  return (
    <>
      <button onClick={handleOnClickSpecies}>Get All Species</button>
      <button onClick={handleOnClickPeople}>Get People</button>
    </>
  );
}

export default Navbar;
