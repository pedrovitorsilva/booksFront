import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './estilo.css';

function Logo() {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt='logomarca' className='logo-img' />
        <p><strong>Djan</strong>Store</p>
      </Link>
    </div>
  );
}

export default Logo;
