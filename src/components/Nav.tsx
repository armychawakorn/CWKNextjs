import Link from 'next/link';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#282c34',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '10px',
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <Link href="/" passHref>
        <span style={linkStyle}>Home</span>
      </Link>
      <Link href="/pokemon" passHref>
        <span style={linkStyle}>Pokemon</span>
      </Link>
      <Link href="/aboutme" passHref>
        <span style={linkStyle}>About Me</span>
      </Link>
    </nav>
  );
};

export default Navbar;