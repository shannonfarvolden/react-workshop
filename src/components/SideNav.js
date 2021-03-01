import './SideNav.css';

function Navbar(props) {
  const { setType } = props;
  return (
    <div className="sidenav">
      <a
        href="#"
        onClick={() => {
          setType('species');
        }}
      >
        Species
      </a>
      <hr />
      <a
        href="#"
        onClick={() => {
          setType('people');
        }}
      >
        People
      </a>
    </div>
  );
}

export default Navbar;
