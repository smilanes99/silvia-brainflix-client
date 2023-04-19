
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/mohan.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <img className='logo' src={logo} alt="BrainFlix Logo" />
      </Link>
      <div className="search-bar-avatar">
        <input className='search-bar' type="text" placeholder="Search" />
        <div className="avatar">
          <img className="avatar" src={avatar} alt="User Avatar" />
        </div>
      </div>
      <div className="button-container">
        <Link to="/upload">
          <button className='button' type="button">UPLOAD</button>
        </Link>
      </div>
      <img className="avatar-tablet" src={avatar} alt="User Avatar" />
    </header>
  );
}


export default Header;