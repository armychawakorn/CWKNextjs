import Link from 'next/link';
import Image from 'next/image';

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
    <>
      <div className='grid sm:grid-cols-1 md:grid-cols-8 bg-slate-600 justify-items-center items-center py-2'>
        <div className='col-span-2 flex gap-4 items-center'>
          <Image className='h-auto' src="https://eng.kku.ac.th/wp-content/uploads/2019/05/LogoKKU-Eng.png" alt="kku-logo" width={24} height={0}/>
          <span className='text-2xl font-bold text-white'>{`Chawakorn's Lab`}</span>
        </div>
        <div className='col-span-3'></div>
        <Link className='' href="/" passHref>
          <span style={linkStyle}>Home</span>
        </Link>
        <Link href="/pokemon" passHref>
          <span style={linkStyle}>Pokemon</span>
        </Link>
        <Link href="/aboutme" passHref>
          <span style={linkStyle}>About Me</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;