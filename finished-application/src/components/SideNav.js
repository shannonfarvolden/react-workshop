import './SideNav.css';

function SideNav(props) {
  const { setType } = props;
  return (
    <nav className="sidenav">
      <button
        onClick={() => {
          setType('films');
        }}
      >
        Films
      </button>
      <div className="divider" />
      <button
        onClick={() => {
          setType('locations');
        }}
      >
        Locations
      </button>
      <div className="divider" />
      <button
        onClick={() => {
          setType('people');
        }}
      >
        People
      </button>
    </nav>
  );
}

export default SideNav;
