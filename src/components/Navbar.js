function Navbar(props) {
  const { setType } = props;
  return (
    <>
      <button
        onClick={() => {
          setType('species');
        }}
      >
        Get All Species
      </button>
      <button
        onClick={() => {
          setType('people');
        }}
      >
        Get People
      </button>
    </>
  );
}

export default Navbar;
